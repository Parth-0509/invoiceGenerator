"use client"
import Hero from './components/Hero.jsx';
import Steps from './components/Steps.jsx'
import InvoiceCTA from './components/InvoiceCTA.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Accordian from './components/Accordian.jsx';

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Steps />
        <InvoiceCTA />
        <Features />
        <Pricing />
        <FAQ />
        <Accordian />
      </main>
    </div>
  );
}

export default Home;
