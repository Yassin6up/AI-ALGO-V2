import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import AuthShell from './AuthShell';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type FormValues = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthShell title="Welcome back" subtitle="Log in to continue managing your AI trading decks.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-xs uppercase text-white/60">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
            placeholder="operator@neoalgo.ai"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-xs uppercase text-white/60">Password</label>
          <input
            type="password"
            {...register('password')}
            className="mt-2 w-full rounded-xl border border-white/10 bg-base-800/60 px-4 py-3 text-sm"
            placeholder="••••••••"
          />
          {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <button type="submit" className="neon-btn w-full justify-center">
          Sign In
        </button>
        <div className="flex items-center justify-between text-xs text-white/60">
          <Link to="/forgot">Forgot password?</Link>
          <Link to="/register">Create account</Link>
        </div>
      </form>
    </AuthShell>
  );
};

export default LoginPage;
