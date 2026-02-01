import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const report = [
  { id: 'ACT-204', name: 'Quantum Trend', amount: '$125', mode: 'Bot Activation', date: '2024-06-04', status: 'Active' },
  { id: 'ACT-198', name: 'Neural Scalper', amount: '$125', mode: 'Bot Activation', date: '2024-06-01', status: 'Completed' }
];

const BotActivationPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Activate bot</h2>
        <p className="mt-2 text-sm text-white/60">Activation fee: $125</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" value="User-10392" readOnly />
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" value="Bot Activation" readOnly />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Activate bot</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Activation report</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {report.map((row) => (
                <tr key={row.id}>
                  <td className="py-3">{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                  <td>{row.mode}</td>
                  <td>{row.date}</td>
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

export default BotActivationPage;
