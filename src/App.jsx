import { lazy, Suspense } from "react";

// Critical above-the-fold — loaded eagerly
import Navbar from "./sections/NavBar";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

// Below-the-fold — lazy loaded
const Projects = lazy(() => import("./sections/Projects"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Minimal skeleton shown while a section loads
const SectionFallback = () => (
  <div className="w-full py-20 flex justify-center items-center" aria-hidden>
    <div className="w-12 h-12 rounded-full border-2 border-orange-500/30 border-t-orange-500 animate-spin" />
  </div>
);

const App = () => (
  <div className="bg-black min-h-screen">
    <PerformanceOptimizer />
    <CustomCursor />
    <Navbar />
    <Hero />

    <div className="relative z-10">
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  </div>
);

export default App;
