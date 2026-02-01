const DepositPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold">Deposit Funds</h2>
          <div className="mt-4 space-y-3">
            <label className="text-xs uppercase text-white/60">Method</label>
            <select className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm">
              <option>USDT (BEP20)</option>
              <option>USDT (TRC20)</option>
            </select>
            <button className="neon-btn w-full justify-center">Generate Invoice</button>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Deposit Invoice</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Amount: $1,500</p>
            <p>Network: USDT BEP20</p>
            <p>Wallet: 0x45A...B12</p>
            <div className="h-40 rounded-2xl border border-white/10 bg-base-800/50" />
            <button className="glass w-full rounded-full px-4 py-2 text-sm">Upload Proof</button>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold">Deposit History</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase text-white/60">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((id) => (
                <tr key={id} className="border-t border-white/5">
                  <td className="px-4 py-3">DEP-0{id}</td>
                  <td className="px-4 py-3">$1,500</td>
                  <td className="px-4 py-3">USDT</td>
                  <td className="px-4 py-3 text-neon-cyan">Confirmed</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
