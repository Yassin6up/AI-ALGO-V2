import GlassCard from '../../components/GlassCard';
import PrimaryButton from '../../components/PrimaryButton';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-xl font-semibold">الملف الشخصي</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="الاسم الكامل" />
          <input className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="البريد الإلكتروني" />
          <input className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="رقم الهاتف" />
        </div>
        <PrimaryButton className="mt-4">حفظ الملف</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">الأمان</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm"
            placeholder="كلمة مرور جديدة"
            type="password"
          />
          <input
            className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm"
            placeholder="كلمة مرور المعاملات"
            type="password"
          />
        </div>
        <PrimaryButton className="mt-4">تحديث الأمان</PrimaryButton>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-semibold">عنوان المحفظة</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm">
            <option>USDT BEP20</option>
            <option>USDT TRC20</option>
          </select>
          <input className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="عنوان المحفظة" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="neon-outline">إرسال رمز</button>
          <input className="rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm" placeholder="أدخل الرمز" />
          <button className="neon-outline">تحقق</button>
        </div>
        <PrimaryButton className="mt-4">حفظ العنوان</PrimaryButton>
      </GlassCard>
    </div>
  );
};

export default SettingsPage;
