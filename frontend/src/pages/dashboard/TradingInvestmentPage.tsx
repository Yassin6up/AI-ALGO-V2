import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const report = [
  { id: 'INV-778', amount: '$2,000', date: '2024-06-03', roi: '18%', status: 'Active' },
  { id: 'INV-772', amount: '$1,250', date: '2024-05-28', roi: '12%', status: 'Completed' }
];

const TradingInvestmentPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Trading investment</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" value="User-10392" readOnly />
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Investment amount"
          />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Invest now</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Investment report</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">Investment ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>ROI</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {report.map((row) => (
                <tr key={row.id}>
                  <td className="py-3">{row.id}</td>
                  <td>{row.amount}</td>
                  <td>{row.date}</td>
                  <td>{row.roi}</td>
                  <td className="text-neon-cyan">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default TradingInvestmentPage;
