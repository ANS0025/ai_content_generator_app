import React from "react";
import Link from "next/link";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className={cn(museo.className, "text-xl")}>ContentLab</div>
    </Link>
  );
};
