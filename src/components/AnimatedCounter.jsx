import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const el = counter.querySelector(".counter-number");
      const { value, suffix } = counterItems[index];

      gsap.set(el, { innerText: 0 });

      gsap.to(el, {
        innerText: value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        onComplete: () => (el.textContent = `${value}${suffix}`),
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-3-cols">
        {counterItems.map(({ suffix, label }, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{suffix}
            </div>
            <div className="text-white-50 text-lg">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;