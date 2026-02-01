import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/AuthCard';
import PrimaryButton from '../../components/PrimaryButton';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log('login', data);
  };

  return (
    <AuthCard
      title="مرحبًا بعودتك"
      subtitle="ادخل إلى لوحة قيادة التداول الذكية."
      footerText="جديد معنا؟"
      footerLink="/register"
      footerLabel="إنشاء حساب"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="email" placeholder="البريد الإلكتروني" className="input-field" />
        <input {...register('password')} type="password" placeholder="كلمة المرور" className="input-field" />
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>الحماية الذكية مفعّلة</span>
          <Link to="/forgot-password" className="text-neon-cyan">
            نسيت كلمة المرور
          </Link>
        </div>
        <PrimaryButton type="submit">تسجيل الدخول</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default LoginPage;
