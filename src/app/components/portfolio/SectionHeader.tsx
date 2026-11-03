interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {kicker && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 mb-2">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-[14.5px] text-slate-600 leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
