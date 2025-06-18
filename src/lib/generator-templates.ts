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
      "与えられたトピックとアウトラインに基づいて、リッチテキストエディタ形式でブログ記事を生成してください。",
    form: [
      {
        label: "ブログ記事のタイトルを入力してください",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "ブログ記事のアウトラインを入力してください",
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
      "指定された動画ジャンルとアウトラインに基づいて、YouTube動画のアイデアをリッチテキストエディタ形式で提案してください。",
    form: [
      {
        label: "YouTube動画のタイトルを入力してください",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "YouTube動画のアウトラインを入力してください",
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
      "以下の画像に対する魅力的なInstagramのキャプションを作成してください：{image_url}。キャプションは魅力的で、情報価値があり、画像の内容に関連したものにしてください。視認性とエンゲージメントを高めるための関連ハッシュタグを含めてください。キャプションはInstagram向けに最適化され、人間と機械の両方が理解しやすいものにしてください。",
    form: [
      {
        label: "YouTube動画のタイトルを入力してください",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "YouTube動画の説明文のアウトラインを入力してください",
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
      "指定されたジャンルとアウトラインに基づいて、280文字のツイート例を提供してください。",
    form: [
      {
        label: "投稿のジャンルを入力してください",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "投稿のアウトラインを入力してください",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
