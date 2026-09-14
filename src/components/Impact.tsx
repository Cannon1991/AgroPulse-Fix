import { MapPin, Users, Building2, Globe2, ArrowRight } from 'lucide-react';

const levels = [
  {
    icon: Users,
    level: 'Village Level',
    title: 'Empowering Individual Farmers',
    desc: 'Smallholder farmers get satellite insights on their phones — knowing what to plant, when to act, and how to protect their crops without needing expensive equipment.',
    image: 'https://images.pexels.com/photos/13638371/pexels-photo-13638371.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    level: 'LGA & State Level',
    title: 'Planning for Local Government',
    desc: 'Local governments and states in Nigeria gain a live map of every parcel, crop health, and weather risk — enabling targeted support, input distribution, and policy.',
    image: 'https://images.pexels.com/photos/3637891/pexels-photo-3637891.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Globe2,
    level: 'Country & Global Level',
    title: 'National Food Security',
    desc: 'Nations and international bodies aggregate parcel data to forecast production, identify at-risk regions, and coordinate food supply for a growing global population.',
    image: 'https://images.pexels.com/photos/12702575/pexels-photo-12702575.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative bg-stone-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <MapPin className="h-3.5 w-3.5" />
            Impact Across Nigeria & Beyond
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            AI for Every Level of{' '}
            <span className="gradient-text">Agricultural Decision</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            From a single farmer in Ado-Ekiti to national food policy in Abuja,
            AgroPulse Fix scales intelligence across every administrative level —
            reducing food insecurity in Nigeria and the world at large.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.level}
              className="reveal group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={level.image}
                  alt={level.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <level.icon className="h-5 w-5 text-brand-700" />
                  </div>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 backdrop-blur-sm">
                    {level.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-stone-900">
                  {level.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {level.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nigeria highlight banner */}
        <div className="reveal mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 p-8 lg:p-12">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-brand-200">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Pilot Region</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white lg:text-3xl">
                Starting in Ado, Ekiti State — Scaling Across Nigeria
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-100">
                Our prototype begins in Ekiti State, mapping parcels and monitoring
                crops at the village level. The same AI pipeline scales to every
                state in Nigeria and to countries worldwide facing food insecurity.
              </p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0 text-base">
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
