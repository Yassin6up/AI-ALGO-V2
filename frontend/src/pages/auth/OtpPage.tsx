import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthCard from '../../components/AuthCard';
import PrimaryButton from '../../components/PrimaryButton';

const schema = z.object({
  otp: z.string().min(6)
});

type FormData = z.infer<typeof schema>;

const OtpPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log('otp', data);
  };

  return (
    <AuthCard
      title="التحقق الثنائي"
      subtitle="أدخل رمز التحقق المكون من 6 أرقام."
      footerText="تحتاج رمزًا جديدًا؟"
      footerLink="/login"
      footerLabel="العودة لتسجيل الدخول"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('otp')}
          placeholder="أدخل رمز التحقق"
          className="input-field tracking-[0.3em] text-center"
        />
        <PrimaryButton type="submit">تحقق</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default OtpPage;
