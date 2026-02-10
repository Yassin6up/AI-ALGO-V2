import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

const PrimaryButton = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={clsx(
      'neon-button hover:scale-[1.02] active:scale-[0.98] text-white flex items-center justify-center gap-2',
      className
    )}
  />
);

export default PrimaryButton;
