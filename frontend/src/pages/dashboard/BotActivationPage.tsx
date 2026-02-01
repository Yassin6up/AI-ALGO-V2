const BotActivationPage = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold">Activate Bot</h2>
        <p className="mt-2 text-sm text-white/60">Activation fee: $125 from Package Wallet.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <label className="text-xs uppercase text-white/60">User ID</label>
            <input
              type="text"
              value="USR-20491"
              readOnly
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
            />
          </div>
          <div>
            <label className="text-xs uppercase text-white/60">Mode</label>
            <input
              type="text"
              value="Bot Activation"
              readOnly
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
            />
          </div>
          <div>
            <label className="text-xs uppercase text-white/60">Transaction Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>
        <button className="neon-btn mt-4">Activate Bot</button>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold">Activation Report</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase text-white/60">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Mode</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((id) => (
                <tr key={id} className="border-t border-white/5">
                  <td className="px-4 py-3">BA-0{id}</td>
                  <td className="px-4 py-3">Neo Core</td>
                  <td className="px-4 py-3">$125</td>
                  <td className="px-4 py-3">Package Wallet</td>
                  <td className="px-4 py-3">2024-07-12</td>
                  <td className="px-4 py-3 text-neon-cyan">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BotActivationPage;
