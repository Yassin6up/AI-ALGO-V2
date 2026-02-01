const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold">Profile</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Full name', 'Email', 'Phone'].map((label) => (
            <div key={label}>
              <label className="text-xs uppercase text-white/60">{label}</label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
                placeholder={label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold">Security</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {['New password', 'Transaction password'].map((label) => (
            <div key={label}>
              <label className="text-xs uppercase text-white/60">{label}</label>
              <input
                type="password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
                placeholder={label}
              />
            </div>
          ))}
        </div>
        <button className="neon-btn mt-4">Update Security</button>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold">Wallet Address Management</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase text-white/60">Network</label>
            <select className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm">
              <option>USDT BEP20</option>
              <option>USDT TRC20</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase text-white/60">Wallet address</label>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="0x..."
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="glass rounded-full px-4 py-2 text-sm">Send OTP</button>
          <input
            type="text"
            className="rounded-xl border border-white/10 bg-base-800/60 px-4 py-2 text-sm"
            placeholder="OTP"
          />
          <button className="neon-btn">Verify & Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
