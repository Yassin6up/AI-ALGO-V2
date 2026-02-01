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
  <div className="min-h-screen bg-base text-white flex items-center justify-center px-6">
    <div className="absolute inset-0 bg-mesh opacity-60" />
    <GlassCard className="relative z-10 w-full max-w-md">
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">NEOALGO AI</p>
      <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-white/60">{subtitle}</p>
      <div className="mt-6">{children}</div>
      <p className="mt-6 text-sm text-white/60">
        {footerText}{' '}
        <Link to={footerLink} className="text-neon-cyan">
          {footerLabel}
        </Link>
      </p>
    </GlassCard>
  </div>
);

export default AuthCard;
