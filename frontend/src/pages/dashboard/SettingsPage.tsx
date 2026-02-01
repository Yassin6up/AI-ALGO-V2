import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Full name" />
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Email" />
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Phone" />
        </div>
        <PrimaryButton className="mt-4">Save profile</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Security</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="New password"
            type="password"
          />
          <input
            className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
            placeholder="Transaction password"
            type="password"
          />
        </div>
        <PrimaryButton className="mt-4">Update security</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">Wallet address</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm">
            <option>USDT BEP20</option>
            <option>USDT TRC20</option>
          </select>
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Wallet address" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="neon-outline">Send OTP</button>
          <input className="rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm" placeholder="Enter OTP" />
          <button className="neon-outline">Verify</button>
        </div>
        <PrimaryButton className="mt-4">Save address</PrimaryButton>
      </GlassCard>
    </div>
  );
};

export default SettingsPage;
