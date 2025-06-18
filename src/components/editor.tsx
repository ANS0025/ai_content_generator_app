"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"
import "react-quill-new/dist/quill.snow.css"
import { Card, CardContent } from "@/components/ui/card"

interface EditorProps {
  value: string
}

export function Editor({ value }: EditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill-new"), { ssr: false }), [])

  return (
    <ReactQuill
      theme="snow"
      value={value}
      readOnly
      className="h-full pb-10 bg-white whitespace-pre-wrap flex-1"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    ></ReactQuill>
  )
}
