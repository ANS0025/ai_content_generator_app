import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Auth = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button size="lg">無料で会員登録</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button size="lg">おかえりなさい！</Button>
      </SignedIn>
    </>
  );
};
