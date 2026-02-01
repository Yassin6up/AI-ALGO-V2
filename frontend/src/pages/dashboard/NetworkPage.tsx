const NetworkPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Total Referrals', value: '124' },
          { label: 'Active Members', value: '87' },
          { label: 'Team Volume', value: '$184,500' }
        ].map((item) => (
          <div key={item.label} className="glass-card p-5">
            <p className="text-xs uppercase text-white/50">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold">Referral Tree Overview</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {['Level 1', 'Level 2', 'Level 3'].map((level) => (
            <div key={level} className="glass flex items-center justify-between rounded-xl px-4 py-3">
              <span>{level}</span>
              <span className="text-neon-cyan">{Math.floor(Math.random() * 40) + 10} Members</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold">Affiliate Network</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase text-white/60">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Join Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {['Nova', 'Atlas', 'Lyra'].map((user, index) => (
                <tr key={user} className="border-t border-white/5">
                  <td className="px-4 py-3">{user} Operator</td>
                  <td className="px-4 py-3">Level {index + 1}</td>
                  <td className="px-4 py-3">2024-06-2{index}</td>
                  <td className="px-4 py-3 text-neon-cyan">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
