import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';

const stats = [
  { label: 'Active users', value: '128,421' },
  { label: 'Trades executed', value: '9.8M' },
  { label: 'Win rate', value: '78.4%' },
  { label: 'AI signal accuracy', value: '92.1%' }
];

const features = [
  {
    title: 'Adaptive AI Signals',
    description: 'Real-time neural market sensing tuned by multi-factor AI engines.'
  },
  {
    title: 'Smart Risk Control',
    description: 'Dynamic exposure limits, AI-assisted stop logic, and autonomous rebalancing.'
  },
  {
    title: 'Auto Allocation',
    description: 'Allocate capital across strategies with precision portfolio routing.'
  },
  {
    title: 'Withdrawal Automation',
    description: 'Schedule compliant withdrawals with encrypted approvals.'
  }
];

const steps = [
  {
    step: '01',
    title: 'Connect & verify',
    description: 'Secure onboarding with biometric-ready KYC and AI fraud checks.'
  },
  {
    step: '02',
    title: 'Select strategy',
    description: 'Choose adaptive bot personas tuned to macro, scalping, or trend.'
  },
  {
    step: '03',
    title: 'Deploy capital',
    description: 'AI routes funds across optimized pools and risk buckets.'
  },
  {
    step: '04',
    title: 'Monitor & evolve',
    description: 'Continuous learning reports and instant override controls.'
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$39',
    description: 'Entry AI automation for emerging traders.',
    perks: ['1 AI strategy', 'Realtime alerts', 'Weekly performance report']
  },
  {
    name: 'Pro',
    price: '$129',
    description: 'Precision trading intelligence for growth portfolios.',
    perks: ['5 AI strategies', 'Smart risk control', 'Priority AI support']
  },
  {
    name: 'Elite',
    price: '$299',
    description: 'Institutional-grade AI command deck.',
    perks: ['Unlimited strategies', 'Private alpha feeds', 'Dedicated quant team']
  }
];

const faqs = [
  {
    q: 'Is NEOALGO AI regulated?',
    a: 'We operate with compliant partners and provide bank-grade transaction audit logs.'
  },
  {
    q: 'How fast are withdrawals?',
    a: 'Automated approval routing enables withdrawals in minutes once verified.'
  },
  {
    q: 'Can I control risk manually?',
    a: 'Yes. Toggle manual overrides, custom stop logic, and position locks anytime.'
  }
];

const testimonials = [
  {
    name: 'Aria Mendez',
    role: 'Crypto Portfolio Lead',
    quote: 'NEOALGO AI feels like a real-time mission control. The clarity is unreal.'
  },
  {
    name: 'Devon Li',
    role: 'Fintech Founder',
    quote: 'The smartest trading UI I have ever used. Every signal feels intentional.'
  },
  {
    name: 'Jordan Patel',
    role: 'Quant Analyst',
    quote: 'Execution speed, visual clarity, and AI transparency are elite.'
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-neon-purple/40 blur-[140px]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-neon-cyan/30 blur-[160px]" />
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Sparkles className="text-neon-cyan" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">NEOALGO AI</p>
              <p className="text-lg font-semibold">Trading Command Deck</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="neon-outline text-sm">Sign in</Link>
            <Link to="/register" className="neon-button text-sm">Start now</Link>
          </div>
        </header>

        <section className="relative z-10 px-6 pb-24 pt-10 md:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold leading-tight"
              >
                The AI trading control center
                <span className="gradient-text"> built for tomorrow.</span>
              </motion.h1>
              <p className="mt-6 text-lg text-white/70 max-w-xl">
                NEOALGO AI orchestrates autonomous trading, predictive signals, and capital
                routing through an intelligent command deck designed for modern investors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>
                  Start now <ArrowRight size={18} />
                </PrimaryButton>
                <button className="neon-outline">View demo</button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <GlassCard key={item.label} className="p-5">
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-neon-blue/30 blur-3xl" />
              <GlassCard className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">AI Command Status</p>
                    <p className="text-2xl font-semibold">96% Optimal</p>
                  </div>
                  <span className="rounded-full bg-neon-cyan/20 px-3 py-1 text-xs">Live</span>
                </div>
                <div className="mt-6 space-y-4">
                  {['Liquidity sync', 'Risk hedging', 'Signal infusion'].map((item) => (
                    <div key={item} className="flex items-center justify-between text-sm">
                      <span>{item}</span>
                      <span className="text-neon-cyan">Synced</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Projected ROI</p>
                  <p className="text-3xl font-semibold text-neon-purple">+18.4%</p>
                  <p className="text-xs text-white/50">Last 30 days</p>
                </div>
              </GlassCard>
              <div className="mt-6 grid gap-4">
                <GlassCard className="flex items-center gap-4">
                  <div className="rounded-2xl bg-neon-purple/20 p-3">
                    <Zap className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Latency</p>
                    <p className="text-lg font-semibold">0.3ms execution</p>
                  </div>
                </GlassCard>
                <GlassCard className="flex items-center gap-4">
                  <div className="rounded-2xl bg-neon-cyan/20 p-3">
                    <ShieldCheck className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Security</p>
                    <p className="text-lg font-semibold">Zero-trust vaults</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="px-6 py-20 md:px-16">
        <SectionHeader
          title="AI-native features"
          subtitle="Every module is tuned for speed, safety, and next-gen decision intelligence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 bg-black/30">
        <SectionHeader
          title="How it works"
          subtitle="Designed for clarity and speed from onboarding to execution."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlassCard key={step.step}>
              <p className="text-sm text-neon-cyan">{step.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="security" className="px-6 py-20 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeader
              title="Security engineered for trust"
              subtitle="Multi-layer protection with continuous monitoring, biometric lockouts, and withdrawal confirmations."
            />
            <div className="mt-8 space-y-4">
              {['Biometric-ready 2FA', 'Encrypted data vaults', 'Withdrawal confirmations'].map((item) => (
                <GlassCard key={item} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-neon-blue/20" />
                  <p className="text-sm text-white/80">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Risk intelligence</p>
            <h3 className="mt-4 text-3xl font-semibold">AI guardrails in every trade.</h3>
            <p className="mt-4 text-white/70">
              Adaptive risk scoring evaluates liquidity, volatility, and exposure in milliseconds, automatically
              recalibrating to protect capital.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Real-time anomaly detection', 'Encrypted approvals', 'Instant incident response', '24/7 AI monitoring'].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
                    {item}
                  </div>
                )
              )}
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 md:px-16 bg-black/30">
        <SectionHeader title="Pricing built for scale" subtitle="Upgrade to unlock smarter AI routing and elite execution." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((tier, index) => (
            <GlassCard key={tier.name} className={index === 1 ? 'border-neon-cyan/60' : ''}>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{tier.name}</p>
              <p className="mt-4 text-4xl font-semibold">{tier.price}</p>
              <p className="mt-2 text-sm text-white/70">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-neon-cyan" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full neon-outline">Choose {tier.name}</button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <SectionHeader title="Trusted by elite operators" subtitle="Real voices from AI-first trading teams." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name}>
              <p className="text-white/70">"{item.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/60">{item.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="faq" className="px-6 py-20 md:px-16 bg-black/30">
        <SectionHeader title="Frequently asked" subtitle="Everything you need to know before you deploy." />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <GlassCard key={item.q}>
              <p className="text-lg font-semibold">{item.q}</p>
              <p className="mt-2 text-sm text-white/70">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="px-6 py-12 md:px-16 border-t border-white/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">NEOALGO AI</p>
            <p className="text-sm text-white/60">Intelligent trading command deck.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
