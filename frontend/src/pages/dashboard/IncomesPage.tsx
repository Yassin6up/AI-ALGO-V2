import GlassCard from '../../components/GlassCard';

const affiliate = [
  { date: '2024-06-02', amount: '$320', level: 'L1' },
  { date: '2024-06-01', amount: '$210', level: 'L2' }
];

const trading = [
  { date: '2024-06-02', amount: '$680', status: 'Paid' },
  { date: '2024-06-01', amount: '$520', status: 'Pending' }
];

const tradingAffiliate = [
  { date: '2024-06-02', amount: '$140', source: 'Nova Riley' },
  { date: '2024-06-01', amount: '$90', source: 'Kai Mendoza' }
];

const IncomesPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Affiliate income</h2>
          <div className="flex gap-2">
            <input className="rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm" type="date" />
            <input className="rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm" type="date" />
            <button className="neon-outline">Export CSV</button>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">Date</th>
                <th>Amount</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {affiliate.map((row) => (
                <tr key={row.date}>
                  <td className="py-3">{row.date}</td>
                  <td>{row.amount}</td>
                  <td>{row.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Trading income</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {trading.map((row) => (
                <tr key={row.date}>
                  <td className="py-3">{row.date}</td>
                  <td>{row.amount}</td>
                  <td className="text-neon-cyan">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Trading affiliate income</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">Date</th>
                <th>Amount</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {tradingAffiliate.map((row) => (
                <tr key={row.date}>
                  <td className="py-3">{row.date}</td>
                  <td>{row.amount}</td>
                  <td>{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default IncomesPage;
