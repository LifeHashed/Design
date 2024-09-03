import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.1]">
      <h1 className="text-4xl text-left">LOGO</h1>
      <Hero/>
      <About/>
    </main>
  );
}
