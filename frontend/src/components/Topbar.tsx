import { FiBell, FiChevronDown, FiGlobe, FiMoon, FiSun } from 'react-icons/fi';
import { useThemeStore } from '../lib/themeStore';

const Topbar = () => {
  const { mode, toggle } = useThemeStore();

  return (
    <header className="flex flex-col gap-4 border-b border-white/5 bg-base-850/70 px-6 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Command Deck</p>
        <h1 className="text-2xl font-semibold">Welcome back, Commander</h1>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70">
          <FiGlobe />
          EN
          <FiChevronDown />
        </button>
        <button
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70"
          onClick={toggle}
        >
          {mode === 'dark' ? <FiMoon /> : <FiSun />} Theme
        </button>
        <button className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70">
          <FiBell /> Alerts
        </button>
        <button className="neon-btn">Deposit</button>
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan" />
          <div>
            <p className="text-sm font-semibold">Nova Miles</p>
            <p className="text-[10px] uppercase text-white/40">Elite</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
