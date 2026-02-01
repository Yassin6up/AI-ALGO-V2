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
      title="Welcome back"
      subtitle="Access your AI trading command deck."
      footerText="New here?"
      footerLink="/register"
      footerLabel="Create account"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm"
        />
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Adaptive AI security enabled</span>
          <Link to="/forgot-password" className="text-neon-cyan">
            Forgot password
          </Link>
        </div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default LoginPage;
