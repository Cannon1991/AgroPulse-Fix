import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/18450804/pexels-photo-18450804/free-photo-of-field-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sunset over agricultural field"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-brand-800/85" />
      </div>

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-300" />
            Join the Food Security Movement
          </div>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Every Hectare Counts.{' '}
            <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
              Every Decision Matters.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-200">
            Whether you farm one parcel or manage agricultural policy for a nation,
            AgroPulse Fix gives you the intelligence to grow more, waste less, and
            secure food for generations to come.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary text-base">
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#dashboard" className="btn-ghost-light text-base">
              Explore the Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
