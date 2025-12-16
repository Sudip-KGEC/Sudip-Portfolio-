import React, { useEffect, useRef } from 'react'

const ParticlesBg = () => {
const canvasRef = useRef(null)

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();

  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    sx: (Math.random() - 0.5) * 0.5, // speedX
    sy: (Math.random() - 0.5) * 0.5 // speedY
  }));

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x = (p.x + p.sx + canvas.width) % canvas.width;
      p.y = (p.y + p.sy + canvas.height) % canvas.height;

      ctx.beginPath();
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(255,255,255,0.7)";
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("resize", resize);
  };
}, []);


  return (
    <canvas
    ref={canvasRef}
    className='fixed top-0 left-0 pointer-events-none -z-0'>
    </canvas>
  )
}

export default ParticlesBg