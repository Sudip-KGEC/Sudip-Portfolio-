import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";

    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      if (["scroll", "wheel", "touchmove", "touchstart"].includes(type)) {
        const normalized =
          typeof options === "object"
            ? { ...options, passive: true }
            : { passive: true, capture: !!options };
        return originalAddEventListener.call(this, type, listener, normalized);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };

    return () => {
      EventTarget.prototype.addEventListener = originalAddEventListener;
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;