import Image from "next/image";
import { Container } from "./ui/container";

export function GallerySection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              セミナーの様子
            </h2>
            <p className="text-lg text-gray-600">
              患者様に安心して治療に専念いただける環境を整えています
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* メインの画像 */}
            <div className="col-span-12">
              <div className="relative aspect-[16/7] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery1.jpg"
                  alt="待合室の様子"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 左側の画像 */}
            <div className="col-span-8">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery2.jpg"
                  alt="病院の外観"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* サイドの画像グリッド */}
            <div className="col-span-4 grid gap-2.5">
              {/* 上部の小さい画像 */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery3.jpg"
                  alt="受付の様子"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 下部の小さい画像 */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery4.jpg"
                  alt="診察室の様子"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
