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
      title="Reset access"
      subtitle="We'll send a secure reset link to your email."
      footerText="Remembered your password?"
      footerLink="/login"
      footerLabel="Back to sign in"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <PrimaryButton type="submit">Send reset link</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
