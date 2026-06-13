import { lazy, Suspense } from "react";
import Navbar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import PerformanceOptimizer from "./components/PerformanceOptimizer.jsx";

const Projects = lazy(() => import("./sections/Projects.jsx"));
const FeatureCards = lazy(() => import("./sections/FeatureCards.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const TechStack = lazy(() => import("./sections/TechStack.jsx"));
const Testimonials = lazy(() => import("./sections/Testimonials.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));


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
