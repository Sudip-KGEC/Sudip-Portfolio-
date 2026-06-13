

const useSmoothScroll = () => {
    
  const scrollTo = (href) => {
    const id = href?.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.pushState(null, "", href);
  };

  return scrollTo;
};

export default useSmoothScroll;