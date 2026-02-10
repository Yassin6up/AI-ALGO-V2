import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './router/routes';
import { useThemeStore } from './store/themeStore';
import './styles/index.css';

const queryClient = new QueryClient();

const ThemeWatcher: React.FC = () => {
  const mode = useThemeStore((state) => state.mode);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.body.classList.toggle('bg-base', mode === 'light');
    document.body.classList.toggle('bg-slate-900', mode === 'dark');
    document.body.classList.toggle('text-slate-900', mode === 'light');
    document.body.classList.toggle('text-white', mode === 'dark');
  }, [mode]);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeWatcher />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
