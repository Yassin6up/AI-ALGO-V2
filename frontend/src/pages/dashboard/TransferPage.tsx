const TransferPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold">Transfer Between Wallets</h2>
          <div className="mt-4 space-y-3">
            <select className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm">
              <option>Package → Income</option>
              <option>Income → Package</option>
            </select>
            <input
              type="number"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Amount"
            />
            <button className="neon-btn w-full justify-center">Transfer</button>
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold">Transfer to Another User</h2>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Recipient ID"
            />
            <input
              type="number"
              className="w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
              placeholder="Amount"
            />
            <button className="neon-btn w-full justify-center">Send</button>
          </div>
        </div>
      </div>

      {['Transfer Report', 'Receive Report'].map((title) => (
        <div key={title} className="glass-card p-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase text-white/60">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((id) => (
                  <tr key={id} className="border-t border-white/5">
                    <td className="px-4 py-3">TRF-0{id}</td>
                    <td className="px-4 py-3">$500</td>
                    <td className="px-4 py-3">2024-07-0{id}</td>
                    <td className="px-4 py-3 text-neon-cyan">Completed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransferPage;
