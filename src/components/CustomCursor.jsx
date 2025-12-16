import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let x = 0, y = 0;
    let rafId;

    const move = (e) => {
      x = e.clientX - 40;
      y = e.clientY - 40;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <div className="w-30 h-30 rounded-full blur-3xl bg-gradient-to-br from-purple-600 to-purple-400 opacity-40" />
    </div>
  );
};

export default CustomCursor;
