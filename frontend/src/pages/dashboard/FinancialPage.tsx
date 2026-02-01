const FinancialPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold">Withdraw Income</h2>
          <div className="mt-4 space-y-3">
            <input
              type="number"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Amount"
            />
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Wallet Address"
            />
            <button className="neon-btn w-full justify-center">Withdraw</button>
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold">Capital Withdraw</h2>
          <div className="mt-4 space-y-3">
            <input
              type="number"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Amount"
            />
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Wallet Address"
            />
            <button className="neon-btn w-full justify-center">Withdraw Capital</button>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold">Withdraw Report</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase text-white/60">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Wallet</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((id) => (
                <tr key={id} className="border-t border-white/5">
                  <td className="px-4 py-3">WD-0{id}</td>
                  <td className="px-4 py-3">$1,200</td>
                  <td className="px-4 py-3">Income</td>
                  <td className="px-4 py-3 text-neon-cyan">Processing</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Account Statement</h3>
          <p className="mt-2 text-sm text-white/60">Last updated 2 minutes ago.</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Total Deposits</span>
              <span className="text-neon-cyan">$24,600</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Withdrawals</span>
              <span>$9,840</span>
            </div>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Income Summary</h3>
          <p className="mt-2 text-sm text-white/60">AI driven performance this cycle.</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Trading Income</span>
              <span className="text-neon-cyan">$12,420</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Affiliate Income</span>
              <span>$4,610</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPage;
