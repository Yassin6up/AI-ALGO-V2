import { NavLink, Outlet } from 'react-router-dom';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useThemeStore } from '../store/themeStore';

const navItems = [
  { label: 'نظرة عامة', to: '/app' },
  { label: 'تفعيل البوت', to: '/app/bot-activation' },
  { label: 'استثمار التداول', to: '/app/trading-investment' },
  { label: 'الشبكة', to: '/app/network' },
  { label: 'الدخل', to: '/app/incomes' },
  { label: 'الإيداع', to: '/app/deposit' },
  { label: 'التحويل', to: '/app/transfer' },
  { label: 'المالية', to: '/app/financial' },
  { label: 'الإعدادات', to: '/app/settings' }
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useThemeStore();

  return (
    <div className="min-h-screen bg-base text-slate-900 flex">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200 p-6 transition-transform md:static md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">NEOALGO AI</p>
            <p className="text-xl font-semibold">لوحة القيادة</p>
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
                  isActive ? 'bg-neon-cyan/20 text-slate-900' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 md:ml-0">
        <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <div>
              <p className="text-sm text-slate-500">مرحبًا بعودتك</p>
              <p className="text-lg font-semibold">القائد زينيث</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-sm">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
            <button
              className="rounded-xl border border-slate-200 bg-white p-2"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="neon-button text-sm px-4 py-2">إيداع سريع</button>
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
