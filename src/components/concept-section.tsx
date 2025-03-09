import { Container } from "../components/ui/container";
import Link from "next/link";

export function ConceptSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            がんと向き合うあなたへ
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            「がん」を患いお悩みの方へ。私たちは、がんの治療でお悩みの方に低分子化フコイダンを活用した統合医療・代替医療の情報提供・ご相談・医師紹介などの活動に取り組んでおります。資料のご希望やフコイダンに関するご質問など、お気軽に当会までご連絡ください。
          </p>

          <p>
            低分子化フコイダンに関するご質問などにお応えしながら、医師相談のご案内や具体的な取り組み方等を中心にご説明させていただきます。また、低分子化フコイダンの飲用に際しては、飲用中のサポートも含めご質問などにつきましてもしっかりと対応させていただきます。
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/contact">
              <div className="inline-flex items-center rounded-lg bg-primary-50 px-6 py-4 text-base text-primary-800 font-bold bg-red-300 text-white">
                <svg
                  className="mr-3 h-5 w-5 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                まずはお気軽にご相談ください
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
