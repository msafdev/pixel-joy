// Sections
import Section1 from "@/components/main/homepage/section-1";
import Section2 from "@/components/main/homepage/section-2";

export default function Home() {
  return (
    <main className="flex h-fit w-full flex-col">
      <Section1 />
      <Section2 />
    </main>
  );
}
