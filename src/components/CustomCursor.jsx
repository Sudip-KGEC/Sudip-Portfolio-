import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const frameId = useRef(null);
  const isEnabled = useRef(true);

  useEffect(() => {
    // Skip on touch devices or if performance is poor
    if (window.matchMedia("(pointer: coarse)").matches) {
      isEnabled.current = false;
      return;
    }

    // Only update cursor every 2 frames (30fps)
    let frameCount = 0;
    let lastX = 0, lastY = 0;
    
    const updateCursor = () => {
      if (!cursorRef.current || !isEnabled.current) return;
      
      frameCount++;
      
      // Update every 2nd frame (30fps)
      if (frameCount % 2 === 0) {
        const newX = position.current.x - 40;
        const newY = position.current.y - 40;
        
        // Only update if position changed significantly
        if (Math.abs(newX - lastX) > 0.5 || Math.abs(newY - lastY) > 0.5) {
          cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
          lastX = newX;
          lastY = newY;
        }
      }
      
      frameId.current = requestAnimationFrame(updateCursor);
    };

    const onMouseMove = (e) => {
      position.current.x = e.clientX;
      position.current.y = e.clientY;
    };

    // Start animation loop
    frameId.current = requestAnimationFrame(updateCursor);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    
    // Disable cursor on low performance
    let lowPerfCount = 0;
    const checkPerformance = setInterval(() => {
      const now = performance.now();
      setTimeout(() => {
        const diff = performance.now() - now;
        if (diff > 100) {
          lowPerfCount++;
          if (lowPerfCount > 3) {
            isEnabled.current = false;
            if (cursorRef.current) {
              cursorRef.current.style.display = 'none';
            }
            clearInterval(checkPerformance);
          }
        } else {
          lowPerfCount = Math.max(0, lowPerfCount - 1);
        }
      }, 50);
    }, 5000);
    
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      window.removeEventListener("mousemove", onMouseMove);
      clearInterval(checkPerformance);
    };
  }, []);

  if (!isEnabled.current) return null;

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ 
        willChange: "transform",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        contain: "strict"
      }}
    >
      <div className="w-32 h-32 rounded-full blur-xl bg-gradient-to-br from-red-600 to-red-400 opacity-10" />
    </div>
  );
};

export default CustomCursor;