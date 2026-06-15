import Hero from "../components/Hero";
import TrustBlock from "../components/TrustBlock";
import ServicesGrid from "../components/ServicesGrid";
import OneWindowGrid from "../components/OneWindowGrid";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <main>
      <Hero />

      <ServicesGrid />

      <OneWindowGrid />

      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Оставить заявку</h2>
        <ContactForm />
      </section>
    </main>
  );
}
