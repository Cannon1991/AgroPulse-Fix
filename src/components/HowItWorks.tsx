import { Layers, CloudSun, Bug, FlaskConical, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Layers,
    step: 'Step 01',
    title: 'Map the Parcels',
    desc: 'Satellite imagery is processed by AI to detect and delineate every crop parcel in a village, LGA, state, or country — even where no formal land records exist.',
  },
  {
    icon: CloudSun,
    step: 'Step 02',
    title: 'Analyze the Climate',
    desc: 'Meteorological data — rainfall, temperature, humidity — is fused with satellite observations to understand each parcel\u2019s growing conditions.',
  },
  {
    icon: TrendingUp,
    step: 'Step 03',
    title: 'Recommend the Right Crops',
    desc: 'AI matches crop varieties to each parcel\u2019s climate profile, soil characteristics, and historical performance to maximize yield potential.',
  },
  {
    icon: Bug,
    step: 'Step 04',
    title: 'Monitor Plant Development',
    desc: 'Throughout the season, satellite and field data track each crop against its healthy growth model. Deviations trigger early disease warnings.',
  },
  {
    icon: FlaskConical,
    step: 'Step 05',
    title: 'Optimize Fertilizer & Harvest',
    desc: 'Controlled experiments and AI models prescribe the exact fertilizer mix per parcel — often doubling yields — and forecast the optimal harvest window.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-brand-950 py-24 lg:py-32">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-700/20 blur-3xl" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200">
            <Layers className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Satellite to Harvest in{' '}
            <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
              Five Steps
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            A complete pipeline that turns raw satellite and weather data into
            actionable intelligence for every farmer, cooperative, and government.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="reveal group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white/10"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-white/20 to-transparent lg:block" />
              )}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300">
                {step.step}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
