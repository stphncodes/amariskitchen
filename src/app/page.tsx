import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import MissionVisionValues from "@/components/MissionVisionValues";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <OurStory />
        <MissionVisionValues />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
