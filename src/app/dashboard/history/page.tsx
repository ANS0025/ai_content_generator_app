import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import Link from "next/link";
import { FileText } from "lucide-react";

const History = async () => {
  const { userId } = await auth();

  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  return (
    <div className="container mx-auto px-10 pt-4">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">生成履歴</h1>
        <p className="text-muted-foreground text-sm">
          ここに生成履歴が表示されます。
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <Badge variant="secondary">{userHistory.length}件</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {userHistory && userHistory.length > 0 ? (
            <Table>
              <TableCaption>
                AIで生成したコンテンツの履歴一覧です。
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>テンプレート</TableHead>
                  <TableHead className="w-[200px]">タイトル</TableHead>
                  <TableHead className="max-w-md">内容</TableHead>
                  <TableHead className="text-right">作成日時</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userHistory.map((history) => (
                  <TableRow key={history.id} className="hover:bg-muted/50">
                    <TableCell>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {history.templateUsed}
                      </Badge>
                    </TableCell>
                    <TableCell className="w-[200px]">
                      <div
                        className="font-medium truncate"
                        title={history.title}
                      >
                        {history.title}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-md">
                      <div className="text-sm text-muted-foreground line-clamp-2 whitespace-pre-wrap">
                        {history.description.length > 100
                          ? history.description.substring(0, 100) + "..."
                          : history.description}
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-sm">
                      {format(history.createdAt, "yyyy/mm/dd HH:mm")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <FileText className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">履歴がありません</h3>
              <p className="text-muted-foreground mb-4">
                まだコンテンツを生成していません。
                <br />
                ジェネレータを使ってコンテンツを作成してみましょう。
              </p>
              <Link href="/">
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  ジェネレータを使う
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
