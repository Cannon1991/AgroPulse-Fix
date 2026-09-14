import { Satellite, CloudRain, ScanLine, Sprout, BarChart3, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Satellite,
    title: 'Satellite Parcel Detection',
    desc: 'AI analyzes satellite imagery to identify and map every crop parcel — even in regions where land records are scarce. Know exactly what is growing where, in every village, LGA, state, and country.',
    image: 'https://images.pexels.com/photos/3637891/pexels-photo-3637891.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Automated parcel boundaries', 'Land-use classification', 'Multi-spectral crop mapping'],
    tag: 'Satellite Data',
  },
  {
    icon: CloudRain,
    title: 'Weather Model Integration',
    desc: 'Combine meteorological forecasts with satellite data to understand rainfall patterns, temperature trends, and seasonal shifts — then recommend the right crops for each micro-region.',
    image: 'https://images.pexels.com/photos/20196067/pexels-photo-20196067.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Hyperlocal rain prediction', 'Drought & flood alerts', 'Crop-climate matching'],
    tag: 'Weather Models',
  },
  {
    icon: ScanLine,
    title: 'Early Disease Detection',
    desc: 'Every crop has a known healthy growth curve. When satellite and field data show development deviating from that curve, AI flags disease early — sometimes saving an entire season\u2019s production.',
    image: 'https://images.pexels.com/photos/30438530/pexels-photo-30438530.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Growth-stage monitoring', 'Anomaly detection within 48 hrs', 'Targeted treatment alerts'],
    tag: 'Predictive Analytics',
  },
  {
    icon: Sprout,
    title: 'Fertilizer Optimization',
    desc: 'Field experiments and AI models determine the precise fertilizer type and quantity for each parcel. Results can double yields compared to traditional, uniform application.',
    image: 'https://images.pexels.com/photos/2067255/pexels-photo-2067255.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Soil-nutrient analysis', 'Variable-rate recommendations', 'Yield-boost experiments'],
    tag: 'Yield Optimization',
  },
  {
    icon: BarChart3,
    title: 'Predictive Yield Analytics',
    desc: 'Forecast harvest outcomes weeks in advance. Government agencies and cooperatives can plan supply chains, storage, and distribution before the season ends.',
    image: 'https://images.pexels.com/photos/1571137/pexels-photo-1571137.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Seasonal yield forecasting', 'Risk-adjusted planning', 'Regional aggregation'],
    tag: 'Analytics',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <Satellite className="h-3.5 w-3.5" />
            Core Capabilities
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            One Platform, <span className="gradient-text">Every Layer</span> of the Farm
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            From orbit to soil, AgroPulse Fix fuses satellite data, weather models,
            and AI into a single decision engine — built for farmers, cooperatives,
            and governments alike.
          </p>
        </div>

        <div className="mt-16 space-y-8 lg:space-y-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-stone-300/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
                  <feature.icon className="h-3.5 w-3.5" />
                  {feature.tag}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <feature.icon className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-stone-900 lg:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone-600 lg:text-lg">
                  {feature.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-stone-700">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                        <ArrowRight className="h-3 w-3 text-brand-700" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
