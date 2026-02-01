interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'left' }: SectionHeaderProps) => (
  <div className={align === 'center' ? 'text-center' : ''}>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeader;
