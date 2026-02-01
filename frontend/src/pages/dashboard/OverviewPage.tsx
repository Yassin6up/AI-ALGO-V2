import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { activityFeed, ticker } from '../../data/mockData';

const chartData = [
  { value: 20 },
  { value: 24 },
  { value: 22 },
  { value: 29 },
  { value: 35 },
  { value: 32 },
  { value: 38 }
];

const OverviewPage = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-4">
        {[
          { label: 'Income Wallet', value: '$18,245' },
          { label: 'Package Wallet', value: '$6,480' },
          { label: 'Total Income', value: '$34,920' },
          { label: 'Total Withdrawals', value: '$9,840' }
        ].map((item) => (
          <div key={item.label} className="glass-card p-5">
            <p className="text-xs uppercase text-white/50">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            <p className="mt-2 text-xs text-neon-cyan">+4.6% this week</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Market Pulse</h2>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {ticker.map((item) => (
              <div key={item.symbol} className="glass flex items-center gap-2 rounded-full px-3 py-1">
                <span>{item.symbol}</span>
                <span className="text-neon-cyan">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="value" stroke="#4cc9f0" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Referral Command Link</h3>
          <p className="mt-2 text-sm text-white/60">Invite operators and grow your AI alliance.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex-1 rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm">
              https://neoalgo.ai/ref/alpha-squad
            </div>
            <button className="neon-btn">Copy</button>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <div className="mt-4 space-y-3">
            {activityFeed.map((item) => (
              <div key={item.action} className="glass flex items-center justify-between rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm">{item.action}</p>
                  <p className="text-xs text-white/50">{item.time}</p>
                </div>
                <span className="text-sm text-neon-cyan">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
