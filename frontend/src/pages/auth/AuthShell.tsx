import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthShell = ({ title, subtitle, children }: AuthShellProps) => {
  return (
    <div className="min-h-screen bg-base-900 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="text-lg font-semibold tracking-[0.3em] text-neon-cyan">NEOALGO AI</div>
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-white/70">{subtitle}</p>
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold">AI Command Guidance</h2>
              <p className="mt-2 text-sm text-white/70">
                Secure sessions, encrypted passwords, and intelligent access monitoring for every operator.
              </p>
            </div>
            <Link className="text-sm text-white/60" to="/">
              ← Back to landing
            </Link>
          </div>
          <div className="glass-card p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
