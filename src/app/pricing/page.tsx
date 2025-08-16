import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
    </main>
  );
}