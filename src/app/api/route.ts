import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("User not Authenticated", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();
    const createNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    });

    revalidatePath("/");
    return NextResponse.json(createNewOutput, { status: 201 });
  } catch (error) {
    console.log("[COURSES_POST]", error);
    return new NextResponse(
      "Failed to create new AI output: An unexpected error occurred while processing your request",
      { status: 500 }
    );
  }
}
