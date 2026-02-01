import AuthShell from './AuthShell';

const OtpPage = () => {
  return (
    <AuthShell title="Two-factor ready" subtitle="Enable OTP protection for withdrawals and wallet changes.">
      <div className="space-y-4">
        <div className="glass-card p-4">
          <p className="text-sm text-white/70">Scan the QR code in your authenticator app.</p>
          <div className="mt-4 h-40 rounded-2xl border border-white/10 bg-base-800/50" />
        </div>
        <div>
          <label className="text-xs uppercase text-white/60">Enter OTP</label>
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
            placeholder="123 456"
          />
        </div>
        <button className="neon-btn w-full justify-center">Verify & Activate</button>
      </div>
    </AuthShell>
  );
};

export default OtpPage;
