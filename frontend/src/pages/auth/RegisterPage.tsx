import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthCard from '../../components/AuthCard';
import PrimaryButton from '../../components/PrimaryButton';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log('register', data);
  };

  return (
    <AuthCard
      title="أنشئ لوحة قيادتك"
      subtitle="ابدأ رحلتك بالتداول الذكي خلال دقائق."
      footerText="لديك حساب بالفعل؟"
      footerLink="/login"
      footerLabel="تسجيل الدخول"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="الاسم الكامل" className="input-field" />
        <input {...register('email')} type="email" placeholder="البريد الإلكتروني" className="input-field" />
        <input {...register('password')} type="password" placeholder="إنشاء كلمة مرور" className="input-field" />
        <PrimaryButton type="submit">ابدأ الآن</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default RegisterPage;
