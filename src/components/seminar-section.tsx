import { Container } from "./ui/container";

export function SeminarSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              がん治療セミナー
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              がん治療の新たな可能性を探る
            </h2>
          </div>

          <div className="space-y-8">
            {/* セミナー内容の説明 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                セミナーで得られる知識と希望
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  がん治療において、標準治療と併用できる低分子化フコイダンの可能性について、最新の研究データと実際の治療例を交えながら、わかりやすく解説いたします。セミナーでは、治療効果を最大限に引き出すための具体的な活用方法や、副作用への対処法なども詳しく説明しています。
                </p>
                <p>
                  「抗がん剤治療との向き合い方が変わった」「具体的な対策が見えてきた」など、多くの参加者様から前向きな声をいただいています。また、同じ悩みを持つ方々との交流を通じて、精神面でのサポートも得られると好評です。
                </p>
              </div>
            </div>

            {/* 受講者の声 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-sm font-medium text-gray-500">受講者の声</p>
                <p className="text-gray-600">
                  「具体的な治療法や生活上の注意点が理解でき、今後の治療に対する不安が和らぎました。先生の丁寧な説明で、希望を持って前に進む勇気をいただきました。」
                </p>
                <p className="mt-4 text-sm text-gray-500">60代女性</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-sm font-medium text-gray-500">受講者の声</p>
                <p className="text-gray-600">
                  「低分子化フコイダンについて、科学的な根拠に基づいた説明を聞くことができ、とても参考になりました。他の参加者との情報交換も貴重な機会となりました。」
                </p>
                <p className="mt-4 text-sm text-gray-500">50代男性</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}