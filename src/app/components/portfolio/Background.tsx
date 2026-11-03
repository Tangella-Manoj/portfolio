export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top blue/indigo atmospheric wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-blue-200/40 via-indigo-100/30 to-transparent blur-3xl opacity-90" />
      
      {/* Right ambient warm amber glow */}
      <div className="absolute top-[20%] -right-40 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl" />
      
      {/* Left ambient soft teal/emerald glow */}
      <div className="absolute top-[45%] -left-40 w-[550px] h-[550px] bg-emerald-100/25 rounded-full blur-3xl" />
      
      {/* Lower ambient purple wash */}
      <div className="absolute top-[75%] right-10 w-[600px] h-[600px] bg-purple-100/25 rounded-full blur-3xl" />

      {/* Subtle micro dot grid texture */}
      <div className="absolute inset-0 bg-grid-light opacity-60 [mask-image:linear-gradient(to_bottom,white_50%,transparent_98%)]" />
    </div>
  );
}
