import { FileText, Youtube, Linkedin } from "lucide-react";

export const generatorTemplates = [
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
