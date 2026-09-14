import { TrendingUp, Users, Map, Droplets } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '2×', label: 'Potential yield increase with optimized fertilizer', sub: 'Field-validated experiments' },
  { icon: Users, value: '8B+', label: 'People relying on global food production today', sub: 'Doubling within decades' },
  { icon: Map, value: '1,284', label: 'Crop parcels mapped in pilot region', sub: 'Ado, Ekiti State' },
  { icon: Droplets, value: '48hr', label: 'Early disease detection window', sub: 'Before visible damage' },
];

const trustBadges = [
  'Satellite Data Integration',
  'Meteorological Models',
  'AI Predictive Analytics',
  'Field-Validated Trials',
  'Mobile-First Design',
  'Scalable to Any Country',
];

export default function Stats() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="container-x">
        {/* Stats grid */}
        <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/50 p-6 text-center transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                <stat.icon className="h-6 w-6 text-brand-600" />
              </div>
              <div className="font-display text-4xl font-extrabold text-stone-900 lg:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-stone-600">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-stone-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="reveal mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400">
            Built on Trusted Technologies
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-600 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
