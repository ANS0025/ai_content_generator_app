import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Auth = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button size="lg">無料で会員登録</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size="lg" asChild>
          <Link href="/dashboard">ダッシュボードに戻る</Link>
        </Button>
      </SignedIn>
    </>
  );
};
