import Link from "next/link";
import { Container } from "./ui/container";

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 会社情報 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                NPO法人 統合医療と健康を考える会
              </h3>
              <p className="text-sm text-gray-600">
                〒892-0821
                <br />
                鹿児島市上之園町21-4
                <br />
                ザ・サンクチュアリー上之園1F
              </p>
            </div>

            {/* リンク */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">メニュー</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    当会について
                  </Link>
                </li>
                <li>
                  <Link href="/seminar" className="text-gray-600 hover:text-gray-900">
                    セミナー情報
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/request" className="text-gray-600 hover:text-gray-900">
                    資料請求
                  </Link>
                </li>
              </ul>
            </div>

            {/* お問い合わせ */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">お問い合わせ</h3>
              <p className="text-sm text-gray-600">
                お気軽にご相談ください
                <br />
                平日 9:00 - 17:00
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm text-green-600 hover:text-green-700 font-semibold"
              >
                お問い合わせはこちら →
              </Link>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} NPO法人 統合医療と健康を考える会. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
} 