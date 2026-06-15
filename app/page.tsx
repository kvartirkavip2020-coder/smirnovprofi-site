import Hero from "../components/Hero";
import TrustBlock from "../components/TrustBlock";
import ServicesGrid from "../components/ServicesGrid";
import OneWindowGrid from "../components/OneWindowGrid";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBlock />
      <ServicesGrid />
      <OneWindowGrid />
      <About />

      <section id="contacts">
        <ContactForm />
      </section>
    </main>
  );
}
