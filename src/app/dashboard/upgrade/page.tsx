"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    // push user to the stripe url
    router.push(response.data.url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                ワンプラン、
                <br />
                必要な分だけクレジットを購入
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                AIクレジットを購入して、すべての機能にアクセスしましょう。
                一度の購入で10万語の生成が可能で、すべてのテンプレートと
                履歴保持機能をご利用いただけます。
              </p>
            </div>
            <Button
              onClick={handleOnClick}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium"
            >
              今すぐ購入
            </Button>
          </div>

          {/* Right Section - Pricing Card */}
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">¥600</span>
                <span className="text-xl text-gray-600 ml-2">/一回</span>
              </div>
              <p className="text-lg text-gray-600 mt-2">10,000 AIクレジット</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">100,000語/購入</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">全テンプレートアクセス</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5flex-shrink-0" />
                <span className="text-gray-700">履歴保持機能</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">優先サポート</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700">無制限プロジェクト</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
