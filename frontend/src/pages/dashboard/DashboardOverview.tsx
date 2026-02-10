import GlassCard from '../../components/GlassCard';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const summary = [
  { label: 'محفظة الدخل', value: '$12,840.50', delta: '+8.2%' },
  { label: 'محفظة الباقات', value: '$6,430.00', delta: '+4.1%' },
  { label: 'إجمالي الدخل', value: '$42,910.22', delta: '+12.5%' },
  { label: 'إجمالي السحوبات', value: '$18,320.90', delta: '-2.1%' }
];

const tickers = [
  { name: 'NAS100', data: [32, 28, 30, 34, 36, 33, 35] },
  { name: 'US30', data: [18, 19, 17, 20, 22, 21, 23] },
  { name: 'EURUSD', data: [12, 14, 13, 12, 15, 16, 14] },
  { name: 'BTC', data: [40, 38, 41, 44, 43, 46, 48] }
];

const activities = [
  { type: 'إيداع', detail: 'USDT BEP20', amount: '+$1,250', time: 'قبل دقيقتين' },
  { type: 'تفعيل بوت', detail: 'Quantum Trend', amount: '-$125', time: 'قبل ساعة' },
  { type: 'سحب', detail: 'محفظة الدخل', amount: '-$320', time: 'قبل 4 ساعات' },
  { type: 'تحويل', detail: 'الباقات → الدخل', amount: '+$500', time: 'أمس' }
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summary.map((item) => (
          <GlassCard key={item.label}>
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            <p className={`mt-2 text-xs ${item.delta.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
              {item.delta} هذا الأسبوع
            </p>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">شريط السوق</p>
            <p className="text-lg font-semibold">مشاعر الذكاء المباشرة</p>
          </div>
          <span className="text-xs text-neon-cyan">تم التحديث قبل 5 ثوانٍ</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tickers.map((ticker) => (
            <div key={ticker.name} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <p className="text-sm text-slate-500">{ticker.name}</p>
              <div className="mt-3 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ticker.data.map((value) => ({ value }))}>
                    <Area type="monotone" dataKey="value" stroke="#5fe4ff" fill="rgba(94,234,212,0.2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <GlassCard>
          <p className="text-sm text-slate-500">رابط الإحالة</p>
          <p className="mt-2 text-lg font-semibold">neoalgo.ai/ref/zenith</p>
          <button className="mt-4 neon-outline">نسخ رابط الإحالة</button>
          <div className="mt-6 grid gap-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>النقرات</span>
              <span>2,140</span>
            </div>
            <div className="flex items-center justify-between">
              <span>التحويلات</span>
              <span>342</span>
            </div>
            <div className="flex items-center justify-between">
              <span>أعضاء نشطون</span>
              <span>128</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <p className="text-sm text-slate-500">النشاط الأخير</p>
          <div className="mt-4 space-y-4">
            {activities.map((activity) => (
              <div key={activity.type} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-semibold">{activity.type}</p>
                  <p className="text-slate-500">{activity.detail}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{activity.amount}</p>
                  <p className="text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default DashboardOverview;
