import Hero from '../../components/Hero';
import Contact from '../../components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}