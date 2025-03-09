import { HeroSection } from "@/components/hero-section";
import { ConceptSection } from "@/components/concept-section";
import { DoctorSection } from "@/components/doctor-section";
import { GallerySection } from "@/components/gallery-section";
import { SeminarSection } from "@/components/seminar-section";
import { OfficeSection } from "@/components/office-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ConceptSection />
      <DoctorSection />
      <GallerySection />
      <SeminarSection />
      <OfficeSection />
    </main>
  );
}
