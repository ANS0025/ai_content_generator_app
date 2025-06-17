import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generatorTemplates } from "@/lib/generator-templates";

export default function GeneratorList() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">AIコンテンツジェネレータ</h1>
        <p className="text-muted-foreground">
          様々なコンテンツタイプに対応したAI生成ツールをご利用いただけます。目的に合わせてジェネレータをお選びください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatorTemplates.map((generatorTemplates) => {
          const IconComponent = generatorTemplates.icon;
          return (
            <Card
              key={generatorTemplates.id}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {generatorTemplates.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  {generatorTemplates.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
