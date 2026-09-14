import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ado, Ekiti State, Nigeria',
    href: 'https://maps.google.com/?q=Ado+Ekiti+Nigeria',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 806 335 3863',
    href: 'tel:+2348063353863',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'godstimeenang4@gmail.com',
    href: 'mailto:godstimeenang4@gmail.com',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">
            <Mail className="h-3.5 w-3.5" />
            Get in Touch
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Let's Build <span className="gradient-text">Food Security</span> Together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Reach out to partner, request a demo, or bring AgroPulse Fix to your
            village, local government, state, or country.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <div className="reveal">
            <h3 className="font-display text-xl font-bold text-stone-900">
              Contact Information
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Based in Ado, Ekiti State, Nigeria — serving farmers, cooperatives,
              and governments across Nigeria and worldwide.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href || '#'}
                  className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-50/50 p-4 transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                    <info.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      {info.label}
                    </div>
                    <div className="mt-0.5 font-display text-base font-semibold text-stone-800">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal">
            <div className="rounded-3xl border border-stone-200 bg-stone-50/50 p-7 shadow-sm lg:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                    <CheckCircle2 className="h-9 w-9 text-brand-600" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-stone-900">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-stone-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Tell us about your farm, organization, or region..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-base">
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
