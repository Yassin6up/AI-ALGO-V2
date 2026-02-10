import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const transfers = [
  { id: 'TR-402', from: 'Package', to: 'Income', amount: '$600', status: 'Completed' },
  { id: 'TR-399', from: 'Income', to: 'User #204', amount: '$150', status: 'Pending' }
];

const TransferPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Transfer between wallets</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <select className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm">
            <option>Package → Income</option>
            <option>Income → Package</option>
          </select>
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Amount"
          />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Transfer</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Transfer to user</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Recipient user ID" />
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Amount"
          />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Send transfer</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Transfer report</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">ID</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((row) => (
                <tr key={row.id}>
                  <td className="py-3">{row.id}</td>
                  <td>{row.from}</td>
                  <td>{row.to}</td>
                  <td>{row.amount}</td>
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

export default TransferPage;
