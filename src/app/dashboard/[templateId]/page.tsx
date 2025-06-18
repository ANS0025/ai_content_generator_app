"use client";

import { generatorTemplates } from "@/lib/generator-templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Loader } from "lucide-react";
import Link from "next/link";
import { Editor } from "@/components/editor";
import { useState } from "react";

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

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      // Handle form submission here
      // Add your API call logic
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating content:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            戻る
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-semibold">{selectedTemplate.title}</h1>
            <p className="text-muted-foreground text-sm">
              {selectedTemplate.description}
            </p>
          </div>
        </div>
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
                  {isLoading ? "生成中..." : "Generate Content"}
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
