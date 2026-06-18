import { useRef, useLayoutEffect, lazy, Suspense } from "react";
import { projects } from "../constants/index.jsx";
import TitleHeader from "../components/TitleHeader.jsx";
import CardSkeleton from "../components/LaptopSkeleton.jsx";
const ProjectCard = lazy(() => import("../components/ProjectCard.jsx"));



const Projects = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar && containerRef.current) {
      containerRef.current.style.setProperty('--nav-height', `${navbar.offsetHeight}px`);
    }
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <TitleHeader title="Featured Projects" sub="My Work" />
      </div>

      <div className="projects-container">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="sticky-card"
            style={{
              position: "sticky",
              top: `calc(var(--nav-height, 80px) + ${(projects.length - 1 - i) * 10}px)`,
              zIndex: i + 1,
            }}
          >
            <div className="max-w-6xl mx-auto px-4 py-8">
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