import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero-section";
import Impact from "@/components/impact";
import Join from "@/components/join";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Impact />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
