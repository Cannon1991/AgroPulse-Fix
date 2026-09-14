import { useState, useEffect } from 'react';
import { Satellite, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Live Demo', href: '#live-demo' },
  { label: 'Capabilities', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-md backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30">
            <Satellite className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display text-lg font-extrabold tracking-tight ${scrolled ? 'text-brand-800' : 'text-white'}`}>
              AgroPulse<span className="text-brand-400"> Fix</span>
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-widest ${scrolled ? 'text-stone-400' : 'text-white/70'}`}>
              AI Agriculture
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-stone-600 hover:text-brand-700'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-brand-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-brand-800' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
