import Hero from '../../components/Hero';
import Features from '../../components/Features';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
    </main>
  );
}