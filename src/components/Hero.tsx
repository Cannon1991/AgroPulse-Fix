import { Satellite, CloudRain, ScanLine, Sprout, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

const heroPills = [
  { icon: Satellite, label: 'Satellite Data' },
  { icon: CloudRain, label: 'Weather Models' },
  { icon: ScanLine, label: 'Disease Detection' },
  { icon: Sprout, label: 'Fertilizer AI' },
  { icon: TrendingUp, label: 'Yield Analytics' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/13638371/pexels-photo-13638371.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Aerial view of lush agricultural fields at sunset"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-transparent to-brand-950/40" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-brand-300" />
            Securing Food for 8 Billion and Beyond
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            AI-Powered Agriculture for a{' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">
              Food-Secure Future
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-stone-200 sm:text-xl"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            AgroPulse Fix combines satellite imagery, meteorological models, and
            predictive analytics to identify crop parcels, detect disease early,
            optimize fertilizer use, and dramatically improve yields — from
            villages in Nigeria to farmland across the world.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <a href="#contact" className="btn-primary text-base">
              Start Your Farm Analysis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#dashboard" className="btn-ghost-light text-base">
              View Dashboard
            </a>
          </div>

          {/* Feature pills */}
          <div
            className="animate-fade-up mt-12 flex flex-wrap gap-3"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            {heroPills.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <pill.icon className="h-4 w-4 text-brand-300" />
                {pill.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
