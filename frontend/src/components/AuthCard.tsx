import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLink: string;
  footerLabel: string;
}

const AuthCard = ({ title, subtitle, children, footerText, footerLink, footerLabel }: AuthCardProps) => (
  <div className="min-h-screen bg-base text-slate-900 flex items-center justify-center px-6">
    <div className="absolute inset-0 bg-mesh opacity-60" />
    <div className="relative z-10 w-full max-w-4xl">
      <GlassCard className="grid gap-8 rounded-[32px] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">NEOALGO AI</p>
          <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">{subtitle}</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              بنية أمان ذكية مع مراقبة مستمرة وتنبيهات لحظية.
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              تصميم حديث وبسيط يدعم تجربة عربية كاملة.
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-card">
          {children}
          <p className="mt-6 text-sm text-slate-500">
            {footerText}{' '}
            <Link to={footerLink} className="text-neon-cyan font-semibold">
              {footerLabel}
            </Link>
          </p>
        </div>
      </GlassCard>
    </div>
  </div>
);

export default AuthCard;
