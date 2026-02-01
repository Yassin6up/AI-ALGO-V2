import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { faqs, features, pricing, stats, steps, testimonials } from '../../data/mockData';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-900 text-white">
      <div className="relative overflow-hidden bg-mesh-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-neon-purple/30 blur-[120px]" />
          <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-neon-cyan/30 blur-[140px]" />
        </div>
        <header className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="text-xl font-semibold tracking-[0.3em] text-neon-cyan">NEOALGO AI</div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-white/70">
              Sign In
            </Link>
            <Link to="/register" className="neon-btn">
              Start Now
            </Link>
          </div>
        </header>

        <section className="relative z-10 px-8 pb-24 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold leading-tight md:text-6xl"
              >
                The AI Trading Command Deck for the Future of Alpha
              </motion.h1>
              <p className="max-w-xl text-lg text-white/70">
                NEOALGO AI orchestrates multi-market intelligence, automated risk control, and lightning-fast
                execution—all in a premium control center built for modern investors.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/register" className="neon-btn">
                  Start Now
                </Link>
                <button className="glass rounded-full px-6 py-3 text-sm text-white/80">View Demo</button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card px-6 py-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card relative overflow-hidden p-6">
              <div className="absolute right-6 top-6 rounded-full bg-neon-purple/30 px-4 py-1 text-xs">Live</div>
              <h3 className="text-lg font-semibold">AI Signal Control</h3>
              <p className="mt-2 text-sm text-white/70">Signal precision across crypto, forex, and indices.</p>
              <div className="mt-6 space-y-4">
                {['Quantum Momentum', 'Neural Trend', 'Macro Drift'].map((signal) => (
                  <div key={signal} className="glass flex items-center justify-between rounded-xl px-4 py-3">
                    <span className="text-sm">{signal}</span>
                    <span className="text-xs text-neon-cyan">Synced</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-neon-purple/30 via-transparent to-neon-cyan/30" />
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">Core Systems</p>
            <h2 className="section-title mt-3">AI infrastructure built for performance</h2>
            <p className="mt-4 text-white/70">
              Every module is engineered with institutional-grade reliability and a fluid, glassmorphism interface.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-5 transition hover:-translate-y-1">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-850 px-8 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="glass-card p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="security" className="px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card p-8">
            <h2 className="section-title">Security beyond standard</h2>
            <p className="mt-4 text-white/70">
              Multi-factor protection, encrypted data vaults, and withdrawal confirmations for every AI-initiated action.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>✓ Dual-layer authentication</li>
              <li>✓ Encrypted transaction passwords</li>
              <li>✓ 24/7 anomaly detection</li>
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Biometric-ready 2FA',
              'Cold storage routing',
              'Automated compliance',
              'Zero-trust access logs'
            ].map((item) => (
              <div key={item} className="glass-card flex items-center justify-between p-6">
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-base-850 px-8 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">Pricing</p>
          <h2 className="section-title mt-4">Plans for every AI operator</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className="glass-card flex flex-col p-6">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-neon-cyan">{plan.price}</p>
              <p className="mt-2 text-sm text-white/60">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <button className="neon-btn mt-6 w-full justify-center">Select Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">Testimonials</p>
            <h2 className="section-title mt-3">Trusted by alpha seekers</h2>
          </div>
          <button className="glass rounded-full px-4 py-2 text-sm text-white/70">Swipe →</button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass-card p-6">
              <p className="text-sm text-white/70">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-white/50">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-base-850 px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan">FAQ</p>
            <h2 className="section-title mt-3">Questions answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card p-6">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-white/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-8 py-10 text-sm text-white/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-white">NEOALGO AI</div>
            <p className="mt-2 max-w-sm">
              Futuristic AI trading infrastructure for precision, speed, and secure capital growth.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
