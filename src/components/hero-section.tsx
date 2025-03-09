import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden pt-16 mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="医療施設の様子"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-slate-200/1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90vh] flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="block text-4xl font-bold tracking-tight text-white sm:text-6xl">
                あきらめない
                <br />
                がん治療！
              </span>
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl">
              がんの進行や抗がん剤の
              <br />
              副作用で悩むあなたに
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                全国の医師が実践する
                <br />
                低分子化フコイダンの活用について
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white sm:text-4xl">
                石川県
              </span>
              <span className="text-xl text-white sm:text-2xl">
                で相談できる
              </span>
            </div>
            
            <div className="mt-4">
              <Button
                size="lg"
                className="bg-primary-600 text-lg hover:bg-primary-700"
              >
                医師をご紹介！
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 