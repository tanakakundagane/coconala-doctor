import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 会社名 */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            医療法人 〇〇会
          </Link>
        </div>

        {/* ナビゲーションリンク */}
        <nav className=" items-center gap-4 hidden md:flex">
          <Button
            variant="default"
            asChild
            className="border-4 border-green-500 bg-white hover:bg-green-500 text-green-500 hover:text-white font-bold p-6 "
          >
            <Link href="/contact" className="font-bold ">
              <p>ご相談<br className="block md:hidden"/>お問い合わせ</p>
            </Link>
          </Button>
          <Button
            variant="default"
            asChild
            className="bg-red-400 hover:bg-red-500 text-white font-bold p-7"
          >
            <Link href="/request">資料請求</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
