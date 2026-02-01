import { ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => (
  <div className={clsx('glass rounded-3xl border border-white/10 p-6', className)}>{children}</div>
);

export default GlassCard;
