import Hero from "@/components/Hero";
import MockupDemo from "@/components/MockupDemo";

export default function HomePage() {
  return (
    // We moved the grid background here so it flows smoothly behind both components!
    <main className="flex flex-col w-full min-h-screen bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Hero />

      {/* Reduced the top padding (py-32 to pb-32 pt-10) to pull the mockup closer to the Hero text */}
      <div className="pb-32 pt-10 flex justify-center">
        <MockupDemo />
      </div>
    </main>
  );
}
