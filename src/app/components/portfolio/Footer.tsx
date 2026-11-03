import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 bg-slate-100/50">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Manoj Tangella</span>
            <span>·</span>
            <span>Backend Software Engineer</span>
            <span>·</span>
            <span>© 2026</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
