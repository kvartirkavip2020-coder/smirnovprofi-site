import Hero from "../components/Hero";
import TrustBlock from "../components/TrustBlock";
import ServicesGrid from "../components/ServicesGrid";
import OneWindowGrid from "../components/OneWindowGrid";
import Cases from "../components/Cases";
import About from "../components/About";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBlock />
      <ServicesGrid />
      <OneWindowGrid />
      <Cases />
      <About />
      <FAQ />

      <section id="contacts">
        <ContactForm />
      </section>
    </main>
  );
}
