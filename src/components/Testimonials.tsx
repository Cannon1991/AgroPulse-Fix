import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Before AgroPulse Fix, I planted by guesswork. Now I know which crops fit my land and when disease is coming. My cassava yield doubled in one season.',
    name: 'Ekemini Enang',
    role: 'Smallholder Farmer',
    location: 'Ado, Ekiti State',
  },
  {
    quote:
      'As a poultry farmer, I used to rely on guesswork for feed and weather planning. Now I get early alerts on my phone that help me protect my birds before conditions turn.',
    name: 'John Ukpe',
    role: 'Poultry Farmer',
    location: 'South-West Nigeria',
  },
  {
    quote:
      'The fertilizer optimization trials are remarkable. My maize and cassava yields have improved in ways that would have taken years of traditional experimentation to discover.',
    name: 'Inyene-Abasi James',
    role: 'Maize & Cassava Farmer',
    location: 'Akwa Ibom State',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-stone-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <Star className="h-3.5 w-3.5" />
            Voices from the Field
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Trusted by Farmers and{' '}
            <span className="gradient-text">Decision-Makers</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-brand-200" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-stone-700">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-stone-900">{t.name}</div>
                  <div className="text-xs text-stone-500">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
