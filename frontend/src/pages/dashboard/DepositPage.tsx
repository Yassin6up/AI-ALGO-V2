import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const history = [
  { id: 'DEP-330', amount: '$1,000', method: 'USDT', status: 'Confirmed' },
  { id: 'DEP-328', amount: '$750', method: 'USDT', status: 'Pending' }
];

const DepositPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Deposit funds</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm">
            <option>USDT (BEP20)</option>
            <option>USDT (TRC20)</option>
          </select>
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Amount"
          />
        </div>
        <PrimaryButton className="mt-4">Generate invoice</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Deposit invoice</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_0.6fr]">
          <div className="space-y-3 text-sm text-white/70">
            <p>Invoice ID: INV-9821</p>
            <p>Wallet: 0x4fA...92b</p>
            <p>Network: USDT BEP20</p>
            <p>Expires: 30 minutes</p>
            <button className="neon-outline">Upload proof</button>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="h-32 w-32 rounded-2xl bg-white/10" />
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Deposit history</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">ID</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row) => (
                <tr key={row.id}>
                  <td className="py-3">{row.id}</td>
                  <td>{row.amount}</td>
                  <td>{row.method}</td>
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

export default DepositPage;
