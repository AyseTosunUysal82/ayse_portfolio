import { MeshBackground } from "@/components/layout/MeshBackground";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Engagement } from "@/components/sections/Engagement";
import { ClientsTestimonials } from "@/components/sections/ClientsTestimonials";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";
// import { WorkProcess } from "@/components/sections/WorkProcess";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <Navbar />
      <main>
  <Hero />
  <About />
  {/* <WorkProcess /> */}
  <Skills />
  <Portfolio />
  <Engagement />
  <CtaBanner />
  {/* <Services /> */}
  {/* <ClientsTestimonials /> */}
  <Contact />
</main>
      <SiteFooter />
    </>
  );
}
