import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthCard from '../../components/AuthCard';
import PrimaryButton from '../../components/PrimaryButton';

const schema = z.object({
  email: z.string().email()
});

type FormData = z.infer<typeof schema>;

const ForgotPasswordPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log('forgot-password', data);
  };

  return (
    <AuthCard
      title="استعادة الوصول"
      subtitle="سوف نرسل رابط استعادة آمن إلى بريدك."
      footerText="تذكرت كلمة المرور؟"
      footerLink="/login"
      footerLabel="العودة لتسجيل الدخول"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-sm"
        />
        <PrimaryButton type="submit">إرسال رابط الاستعادة</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
