import { NavLink, Outlet } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useThemeStore } from '../store/themeStore';

const navItems = [
  { label: 'Overview', to: '/app' },
  { label: 'Bot Activation', to: '/app/bot-activation' },
  { label: 'Trading Investment', to: '/app/trading-investment' },
  { label: 'Network', to: '/app/network' },
  { label: 'Incomes', to: '/app/incomes' },
  { label: 'Deposit', to: '/app/deposit' },
  { label: 'Transfer', to: '/app/transfer' },
  { label: 'Financial', to: '/app/financial' },
  { label: 'Settings', to: '/app/settings' }
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useThemeStore();

  return (
    <div className="min-h-screen bg-base text-white flex">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-black/60 backdrop-blur-xl border-r border-white/10 p-6 transition-transform md:static md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">NEOALGO AI</p>
            <p className="text-xl font-semibold">Command Deck</p>
          </div>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="mt-10 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/app'}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm transition ${
                  isActive ? 'bg-neon-cyan/20 text-white' : 'text-white/70 hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 md:ml-0">
        <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <div>
              <p className="text-sm text-white/60">Welcome back</p>
              <p className="text-lg font-semibold">Commander Zenith</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
            <button
              className="rounded-xl border border-white/10 bg-black/40 p-2"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="neon-button text-sm px-4 py-2">Deposit</button>
            <div className="h-10 w-10 rounded-full bg-neon-purple/30" />
          </div>
        </header>
        <main className="px-6 py-8 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
