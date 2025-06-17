import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Youtube, Linkedin } from "lucide-react";

interface Generator {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  prompt: string;
  form?: {
    label: string;
    field: string;
    name: string;
    required?: boolean;
  }[];
}

const generators: Generator[] = [
  {
    id: "blog-post",
    title: "ブログ記事",
    description:
      "SEO最適化されたブログ投稿を生成。タイトル、キーワード、内容を自動で提案します。",
    icon: FileText,
    category: "blog",
    prompt:
      "Give me blog post on given topic & outline in Rich Text Editor format.",
    form: [
      {
        label: "Enter your blog post title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter your blog post outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    id: "youtube-video-idea",
    title: "YouTube動画アイデア",
    description:
      "YouTube動画のアイデアを生成。視聴者の興味や目的に合わせたトピックやキーワードを提案します。",
    icon: Youtube,
    category: "video",
    prompt:
      "Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format.",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Youtube Video Description Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    id: "youtube-description",
    title: "YouTube説明文",
    description:
      "YouTube動画の検索性とエンゲージメントを高める説明文を生成。SEOに最適化されたタグやキーワードも自動で提案します。",
    icon: Youtube,
    category: "video",
    prompt:
      "Create a compelling Instagram caption for the following image: {image_url}. The caption should be engaging, informative, and relevant to the image content. Include relevant hashtags to enhance visibility and engagement. The caption should be optimized for Instagram and be easily understood by both humans and machines.",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Youtube Video Description Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    id: "linkedin-post",
    title: "LinkedIn 投稿",
    description:
      "プロフェッショナルなLinkedIn投稿を生成。ビジネス向けの価値ある情報を発信するコンテンツを作成します。",
    icon: Linkedin,
    category: "professional",
    prompt:
      "Give me 280 characters of tweet example on given niche & outline topic",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];

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
        {generators.map((generator) => {
          const IconComponent = generator.icon;
          return (
            <Card
              key={generator.id}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {generator.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  {generator.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
