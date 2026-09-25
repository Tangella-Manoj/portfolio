export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#08090c]">
      {/* Top subtle indigo glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-40 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 70%)',
        }}
      />

      {/* Side ambient accent glow */}
      <div
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] opacity-25 blur-[140px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 65%)',
        }}
      />

      {/* Subtle bottom-left glow */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] opacity-20 blur-[140px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Precision engineering blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 40%, transparent 95%)',
        }}
      />

      {/* Soft vignette toward viewport edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(8, 9, 12, 0.7) 100%)',
        }}
      />
    </div>
  );
}
