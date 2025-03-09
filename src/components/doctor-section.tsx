import Image from "next/image";
import { Container } from "./ui/container";

export function DoctorSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* 画像部分 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero.jpg"
                alt="担当医師の写真"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* テキストコンテンツ */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                  医師からのメッセージ
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  「がんと向き合う患者様に、
                  <br />
                  希望ある選択肢を」
                </h2>
              </div>

              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  医療法人〇〇会 院長
                  <span className="ml-4">山田 花子</span>
                </h3>
                <p className="text-sm text-gray-600">
                  日本外科学会専門医
                  <br />
                  がん治療認定医
                </p>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  30年以上にわたるがん治療の臨床経験から、標準治療に加えて低分子化フコイダンを活用した統合医療の可能性に着目してきました。
                </p>
                <p>
                  がん治療において、患者様一人一人の状態や希望に寄り添いながら、より良い治療選択のために、私たちができることを追求していきたいと考えています。
                </p>
                <p>
                  低分子化フコイダンの活用は、がん治療における新たな可能性を開く選択肢の一つとして、多くの患者様に希望をもたらすものと確信しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
