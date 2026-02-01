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
      title="Create your command deck"
      subtitle="Launch your AI trading journey in minutes."
      footerText="Already have access?"
      footerLink="/login"
      footerLabel="Sign in"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          placeholder="Full name"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Create password"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <PrimaryButton type="submit">Start now</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default RegisterPage;
