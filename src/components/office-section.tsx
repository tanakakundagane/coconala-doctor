import Image from "next/image";
import { Container } from "./ui/container";

export function OfficeSection() {
  return (
    <section className="bg-white">
      {/* フルワイドの画像セクション */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/jimusyo.png"
          alt="事務所の外観"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />{" "}
        {/* オプションのオーバーレイ */}
      </div>

      {/* コンテンツセクション */}
      <div className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">NPO法人</h2>
              <h3 className="text-2xl font-bold">
                統合医療と健康を考える会について
              </h3>
              <div className="w-12 h-1 bg-green-500 mx-auto mt-8" />
            </div>

            <div className="mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                NPO法人
                統合医療と健康を考える会では、がん患者さん・ご家族に向け抗がん剤との相乗効果や副作用の軽減が期待されるサプリメント「低分子化フコイダン」の活用をご提案しています。
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-[200px,1fr] items-center border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">団体名称</div>
                <div className="text-gray-600">
                  特定非営利活動法人　統合医療と健康を考える会
                </div>
              </div>

              <div className="grid grid-cols-[200px,1fr] items-center border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">主たる事務所</div>
                <div className="text-gray-600">
                  鹿児島市上之園町21-4 ザ・サンクチュアリー上之園1F
                </div>
              </div>

              <div className="grid grid-cols-[200px,1fr] items-center border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">従たる住所</div>
                <div className="text-gray-600">
                  沖縄県宜野湾市伊佐2-19-12 パティオ遊607
                </div>
              </div>

              <div className="grid grid-cols-[200px,1fr] items-center border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">理事長</div>
                <div className="text-gray-600">益山司</div>
              </div>

              <div className="grid grid-cols-[200px,1fr] items-center border-b border-gray-200 py-4">
                <div className="font-bold text-gray-700">設立</div>
                <div className="text-gray-600">平成16年8月</div>
              </div>
            </div>

            {/* Google Maps セクション */}
            <div className="space-y-4 mb-16 flex flex-col justify-center items-center mt-10 gap-4">
              <h4 className="text-xl font-bold text-gray-900">アクセス</h4>
              <div className="aspect-video w-full rounded-xl overflow-hidden mx-auto flex flex-col  items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0556646730396!2d130.5473669!3d31.5963492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e67c3c2c38b7f%3A0x6c7f0de3b2d0d0a0!2z44CSODkyLTA4MjEg6bm_5YWQ5bO25biC5LiK44Gu5ZyS55S677yS77yR4oiS77yU!5e0!3m2!1sja!2sjp!4v1647327000000!5m2!1sja!2sjp"
                  width="80%"
                  height="80%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
