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
      title="Two-factor verification"
      subtitle="Enter the 6-digit code from your authenticator."
      footerText="Need a new code?"
      footerLink="/login"
      footerLabel="Back to login"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('otp')}
          placeholder="Enter OTP"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm tracking-[0.3em] text-center"
        />
        <PrimaryButton type="submit">Verify</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default OtpPage;
