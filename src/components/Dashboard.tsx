import { TrendingUp, Recycle, Settings, CloudRain, Bug, Target } from 'lucide-react';

const aims = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Improve the Yields',
    desc: 'Use predictive analytics and satellite data to recommend the best crop varieties and practices for each parcel — sometimes doubling output.',
    image: 'https://images.pexels.com/photos/12702575/pexels-photo-12702575.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: 'Up to 2× yield increase',
  },
  {
    num: '02',
    icon: Recycle,
    title: 'Reduce Waste',
    desc: 'Detect problems early, apply inputs precisely, and prevent post-harvest losses with data-driven decisions at every growth stage.',
    image: 'https://images.pexels.com/photos/1571137/pexels-photo-1571137.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '30% less crop waste',
  },
  {
    num: '03',
    icon: Settings,
    title: 'Optimize Operations',
    desc: 'Streamline planting, monitoring, and harvesting with AI-coordinated workflows tailored to each village, LGA, state, and country.',
    image: 'https://images.pexels.com/photos/2067255/pexels-photo-2067255.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: 'End-to-end farm intelligence',
  },
  {
    num: '04',
    icon: CloudRain,
    title: 'Predict Weather to Protect Crops',
    desc: 'Integrate meteorological models with satellite data to forecast rain, drought, and storms — so farmers act before damage occurs.',
    image: 'https://images.pexels.com/photos/20196067/pexels-photo-20196067.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '7-day hyperlocal forecasts',
  },
  {
    num: '05',
    icon: Bug,
    title: 'Detect Disease & Secure Production',
    desc: 'Monitor plant development against healthy growth models. When growth deviates, AI flags disease early — saving entire harvests.',
    image: 'https://images.pexels.com/photos/30438530/pexels-photo-30438530.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: 'Early warning within 48 hrs',
  },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative bg-stone-50 py-24 lg:py-32">
      <div className="container-x">
        {/* Section header */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <Target className="h-3.5 w-3.5" />
            Our Mission Dashboard
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Five Aims Driving <span className="gradient-text">Food Security</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            The world's population is racing toward 8 billion — and doubling soon.
            AgroPulse Fix tackles this challenge head-on with five clear,
            measurable objectives powered by AI, satellite data, and weather models.
          </p>
        </div>

        {/* Dashboard mockup frame */}
        <div className="reveal mt-16 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-stone-300/40">
          {/* Dashboard top bar */}
          <div className="flex items-center gap-2 border-b border-stone-100 bg-stone-50 px-5 py-3.5">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="ml-3 flex-1">
              <div className="mx-auto max-w-xs rounded-md bg-white px-3 py-1 text-center text-xs font-medium text-stone-400 ring-1 ring-stone-200">
                agrofix.app / dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="grid gap-px bg-stone-100 lg:grid-cols-3">
            {/* Side panel */}
            <div className="hidden bg-white p-6 lg:block">
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">Region</div>
                <div className="mt-1 font-display text-lg font-bold text-stone-900">Ado, Ekiti State</div>
                <div className="text-sm text-stone-500">Nigeria · West Africa</div>
              </div>
              <div className="space-y-3">
                {['Parcels Mapped', 'Health Index', 'Weather Risk', 'Disease Alerts'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-stone-50 px-3 py-2.5">
                    <span className="text-sm font-medium text-stone-600">{item}</span>
                    <span className={`text-sm font-bold ${i === 3 ? 'text-amber-600' : 'text-brand-600'}`}>
                      {['1,284', '82%', 'Low', '3'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
                <div className="text-xs font-medium text-brand-100">Active Parcels</div>
                <div className="mt-1 font-display text-3xl font-extrabold">1,284</div>
                <div className="mt-1 text-xs text-brand-200">+12% this season</div>
              </div>
            </div>

            {/* Main content — 5 aims */}
            <div className="bg-white p-6 lg:col-span-2 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-stone-900">Mission Objectives</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  Live · 2026 Season
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {aims.map((aim) => (
                  <div
                    key={aim.num}
                    className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/50 transition-all duration-300 hover:border-brand-300 hover:shadow-lg"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={aim.image}
                        alt={aim.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <aim.icon className="h-5 w-5 text-brand-700" />
                      </div>
                      <div className="absolute bottom-2 left-3 text-xs font-bold text-white/90">
                        {aim.num}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-display text-base font-bold text-stone-900">{aim.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{aim.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {aim.stat}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Summary card */}
                <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-white">
                  <div className="text-3xl font-extrabold">8B+</div>
                  <div className="mt-1 text-sm text-brand-100">
                    People to feed. AgroPulse Fix makes every hectare count.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
