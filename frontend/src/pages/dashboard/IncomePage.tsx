const IncomePage = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Income Streams</h2>
          <div className="flex gap-2">
            <input
              type="date"
              className="rounded-xl border border-white/10 bg-base-800/60 px-3 py-2 text-sm"
            />
            <input
              type="date"
              className="rounded-xl border border-white/10 bg-base-800/60 px-3 py-2 text-sm"
            />
            <button className="glass rounded-full px-4 py-2 text-sm">Export CSV</button>
          </div>
        </div>
      </div>

      {['Affiliate Income', 'Trading Income', 'Trading Affiliate Income'].map((section) => (
        <div key={section} className="glass-card p-6">
          <h3 className="text-lg font-semibold">{section}</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase text-white/60">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((id) => (
                  <tr key={id} className="border-t border-white/5">
                    <td className="px-4 py-3">2024-07-1{id}</td>
                    <td className="px-4 py-3">$1,2{id}0</td>
                    <td className="px-4 py-3">Bot Cycle {id}</td>
                    <td className="px-4 py-3 text-neon-cyan">Credited</td>
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

export default IncomePage;
