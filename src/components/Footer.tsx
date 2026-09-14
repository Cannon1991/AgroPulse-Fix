import { Satellite, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Capabilities', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  Company: [
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
    { label: 'Get Started', href: '#contact' },
  ],
  Mission: [
    { label: 'Improve Yields', href: '#dashboard' },
    { label: 'Reduce Waste', href: '#dashboard' },
    { label: 'Detect Disease Early', href: '#dashboard' },
    { label: 'Optimize Fertilizer', href: '#dashboard' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 pt-16 pb-8 text-stone-300">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">
                <Satellite className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">
                  AgroPulse<span className="text-brand-400"> Fix</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-brand-300">
                  AI Agriculture
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              AI-powered digital agriculture combining satellite data, weather
              models, and predictive analytics to secure food production for a
              growing world.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="h-4 w-4 text-brand-400" />
                Ado, Ekiti State, Nigeria
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Phone className="h-4 w-4 text-brand-400" />
                +234 806 335 3863
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="h-4 w-4 text-brand-400" />
                godstimeenang4@gmail.com
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} AgroPulse Fix. Securing food for a growing world.
            </p>
            <p className="text-xs text-stone-500">
              Built for farmers, cooperatives, and governments in Nigeria and beyond.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
