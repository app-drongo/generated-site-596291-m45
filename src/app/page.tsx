import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
    </main>
  );
}