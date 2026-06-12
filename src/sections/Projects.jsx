import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { projects } from "@/constants";
import TitleHeader from "@/components/TitleHeader";

const ProjectCard = lazy(() => import("@/components/ProjectCard"));

const CardSkeleton = () => (
  <div className="w-full h-125 rounded-2xl bg-zinc-900 animate-pulse">
    <div className="p-6 space-y-4">
      <div className="h-4 bg-zinc-800 rounded w-3/4" />
      <div className="h-4 bg-zinc-800 rounded w-1/2" />
    </div>
  </div>
);

const NAVBAR_HEIGHT = 80; // static fallback — avoids offsetHeight reflow on every render

const Projects = () => {
  const sectionRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(NAVBAR_HEIGHT);

  // Read navbar height once after mount — outside of any animation loop
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      // requestAnimationFrame ensures layout is settled before reading offsetHeight
      requestAnimationFrame(() => setNavbarHeight(navbar.offsetHeight));
    }
  }, []);

  // Prefetch below-fold sections during idle time
  useEffect(() => {
    const prefetch = () => {
      import("@/sections/Experience");
      import("@/sections/TechStack");
    };
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch);
      return () => cancelIdleCallback(id);
    }
    // Fallback for Safari
    const t = setTimeout(prefetch, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <TitleHeader title="Featured Projects" sub="My Work" />
      </div>

      <div className="projects-container">
        {projects.map((project, i) => (
          <div
            key={project.id}
            style={{
              position: "sticky",
              top: navbarHeight + (projects.length - 1 - i) * 10,
              zIndex: i + 1,
            }}
          >
            <div className="max-w-6xl mx-auto px-4 py-8">
              {/* Always render cards — Suspense handles the loading state */}
              <Suspense fallback={<CardSkeleton />}>
                <ProjectCard {...project} />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;