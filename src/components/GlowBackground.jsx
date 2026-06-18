const GlowBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
    {/* base gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#1a0000_0%,#0a0a0a_60%)]" />

    {/* top-left glow */}
    <div className="absolute -top-32 -left-32 w-75 h-50 rounded-full bg-red-500/30 blur-[100px] will-change-transform" />

    {/* subtle center depth */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-red-950/20 blur-[120px] will-change-transform" />
  </div>
);

export default GlowBackground;