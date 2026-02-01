import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const reports = [
  { id: 'WD-210', type: 'Income Withdraw', amount: '$420', status: 'Processing' },
  { id: 'WD-208', type: 'Capital Withdraw', amount: '$980', status: 'Completed' }
];

const FinancialPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Withdraw income</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Amount"
          />
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Wallet address" />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Request withdrawal</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Capital withdraw</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input
            type="number"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Amount"
          />
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Wallet address" />
          <input
            type="password"
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
          />
        </div>
        <PrimaryButton className="mt-4">Submit capital withdrawal</PrimaryButton>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard>
          <h2 className="text-xl font-semibold">Account statement</h2>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <div className="flex justify-between"><span>Net deposits</span><span>$12,400</span></div>
            <div className="flex justify-between"><span>Net withdrawals</span><span>$4,120</span></div>
            <div className="flex justify-between"><span>Net profit</span><span>$6,380</span></div>
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="text-xl font-semibold">Income summary</h2>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <div className="flex justify-between"><span>Trading income</span><span>$3,900</span></div>
            <div className="flex justify-between"><span>Affiliate income</span><span>$1,280</span></div>
            <div className="flex justify-between"><span>Bonus income</span><span>$740</span></div>
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold">Withdraw report</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((row) => (
                <tr key={row.id}>
                  <td className="py-3">{row.id}</td>
                  <td>{row.type}</td>
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

export default FinancialPage;
