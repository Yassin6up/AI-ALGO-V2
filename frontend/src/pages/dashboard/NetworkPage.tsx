import GlassCard from '../../components/GlassCard';

const referrals = [
  { user: 'Nova Riley', level: 'L1', joined: '2024-05-12', status: 'Active' },
  { user: 'Kai Mendoza', level: 'L2', joined: '2024-05-20', status: 'Active' },
  { user: 'Skyler Novak', level: 'L1', joined: '2024-06-01', status: 'Pending' }
];

const NetworkPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard>
          <p className="text-sm text-white/60">Total referrals</p>
          <p className="mt-2 text-2xl font-semibold">1,248</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/60">Active members</p>
          <p className="mt-2 text-2xl font-semibold">642</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/60">Team volume</p>
          <p className="mt-2 text-2xl font-semibold">$2.4M</p>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="text-xl font-semibold">Referral tree</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Commander Zenith', 'L1: Nova Riley', 'L2: Kai Mendoza'].map((node) => (
            <div key={node} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm">
              {node}
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Referral table</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full table-glass">
            <thead>
              <tr>
                <th className="py-3">User</th>
                <th>Level</th>
                <th>Join date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((row) => (
                <tr key={row.user}>
                  <td className="py-3">{row.user}</td>
                  <td>{row.level}</td>
                  <td>{row.joined}</td>
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

export default NetworkPage;
