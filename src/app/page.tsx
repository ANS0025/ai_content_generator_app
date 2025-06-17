import { Hero3 } from "@/components/hero3";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Hero3 />
    </div>
  );
}
