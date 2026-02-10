import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import OtpPage from '../pages/auth/OtpPage';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardOverview from '../pages/dashboard/DashboardOverview';
import SettingsPage from '../pages/dashboard/SettingsPage';
import BotActivationPage from '../pages/dashboard/BotActivationPage';
import TradingInvestmentPage from '../pages/dashboard/TradingInvestmentPage';
import NetworkPage from '../pages/dashboard/NetworkPage';
import IncomesPage from '../pages/dashboard/IncomesPage';
import DepositPage from '../pages/dashboard/DepositPage';
import TransferPage from '../pages/dashboard/TransferPage';
import FinancialPage from '../pages/dashboard/FinancialPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />
  },
  {
    path: '/otp',
    element: <OtpPage />
  },
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'bot-activation', element: <BotActivationPage /> },
      { path: 'trading-investment', element: <TradingInvestmentPage /> },
      { path: 'network', element: <NetworkPage /> },
      { path: 'incomes', element: <IncomesPage /> },
      { path: 'deposit', element: <DepositPage /> },
      { path: 'transfer', element: <TransferPage /> },
      { path: 'financial', element: <FinancialPage /> }
    ]
  }
]);
