import { NavLink } from 'react-router-dom';
import { FiActivity, FiCpu, FiDollarSign, FiGrid, FiPieChart, FiRepeat, FiSettings, FiShare2, FiUploadCloud } from 'react-icons/fi';

const navItems = [
  { label: 'Overview', to: '/app', icon: FiGrid },
  { label: 'Bot Activation', to: '/app/bot-activation', icon: FiCpu },
  { label: 'Trading Investment', to: '/app/investment', icon: FiActivity },
  { label: 'Network', to: '/app/network', icon: FiShare2 },
  { label: 'Income', to: '/app/income', icon: FiPieChart },
  { label: 'Deposit', to: '/app/deposit', icon: FiUploadCloud },
  { label: 'Transfer', to: '/app/transfer', icon: FiRepeat },
  { label: 'Financial', to: '/app/financial', icon: FiDollarSign },
  { label: 'Settings', to: '/app/settings', icon: FiSettings }
];

const Sidebar = () => {
  return (
    <aside className="hidden h-full w-64 flex-col border-r border-white/5 bg-base-850/80 p-6 backdrop-blur-xl lg:flex">
      <div className="mb-10 text-lg font-semibold tracking-[0.2em] text-neon-cyan">NEOALGO AI</div>
      <nav className="space-y-2 text-sm">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            end={to === '/app'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive ? 'bg-white/10 text-white shadow-glow' : 'text-white/60 hover:bg-white/5'
              }`
            }
          >
            <Icon className="text-lg" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
