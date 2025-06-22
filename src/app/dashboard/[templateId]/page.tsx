"use client";

import { generatorTemplates } from "@/lib/generator-templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { Editor } from "@/components/editor";
import { useState } from "react";
import { chat } from "@/lib/ai-provider";
import axios from "axios";

interface TemplateIdProps {
  templateId: string;
}

export default function GeneratorPage({ params }: { params: TemplateIdProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const selectedTemplate = generatorTemplates.find(
    (template) => template.id === params.templateId
  );

  if (!selectedTemplate) {
    return <div>Template not found</div>;
  }

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.prompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chat.sendMessage({ message: finalAIPrompt });
      setAiOutput(result.text || "Error generating content");
      // データを保存する
      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.text,
        templateUsed: selectedTemplate?.title,
      });
      console.log("response: " + response);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };

  return (
    <div className="container mx-auto px-10">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">
          {selectedTemplate.title}ジェネレータ
        </h1>
        <p className="text-muted-foreground text-sm">
          {selectedTemplate.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Left Column - Input Form */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="h-fit">
            <CardContent className="pt-6">
              <form action={onSubmit}>
                <div className="flex flex-col gap-4">
                  {selectedTemplate.form?.map((form, index) => (
                    <div key={index}>
                      <Label className="text-sm font-medium text-muted-foreground">
                        {form.label}
                        {form.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>
                      {form.field === "input" ? (
                        <div className="mt-2">
                          <Input name={form.name} required={form.required} />
                        </div>
                      ) : (
                        <div className="mt-2">
                          <Textarea
                            name={form.name}
                            className="min-h-[120px] resize-none"
                            required={form.required}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="animate-spin mr-2 h-4 w-4" />
                  ) : null}
                  {isLoading ? "生成中..." : "コンテンツを生成"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Editor */}
        <div className="space-y-6 lg:col-span-2">
          <Editor value={isLoading ? "生成中..." : aiOutput} />
        </div>
      </div>
    </div>
  );
}
