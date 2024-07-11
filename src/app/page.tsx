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
      <div className="layout-wrapper pt-32 text-center mx-auto my-12" id="join">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FUtucCNib6w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mx-auto w-full h-96"
        ></iframe>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
