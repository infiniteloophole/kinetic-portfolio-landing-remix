import { useState } from 'react'
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import MarqueeSection from "@/components/home/Marquee";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <Projects />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}

export default App;