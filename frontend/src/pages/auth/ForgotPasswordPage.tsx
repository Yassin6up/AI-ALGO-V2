import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthShell from './AuthShell';

const schema = z.object({
  email: z.string().email()
});

type FormValues = z.infer<typeof schema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthShell title="Reset access" subtitle="We will send a secure reset link to your email.">
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
        <button type="submit" className="neon-btn w-full justify-center">
          Send Reset Link
        </button>
      </form>
    </AuthShell>
  );
};

export default ForgotPasswordPage;
