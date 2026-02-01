import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import OtpPage from './pages/auth/OtpPage';
import DashboardLayout from './layouts/DashboardLayout';
import OverviewPage from './pages/dashboard/OverviewPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import BotActivationPage from './pages/dashboard/BotActivationPage';
import InvestmentPage from './pages/dashboard/InvestmentPage';
import NetworkPage from './pages/dashboard/NetworkPage';
import IncomePage from './pages/dashboard/IncomePage';
import DepositPage from './pages/dashboard/DepositPage';
import TransferPage from './pages/dashboard/TransferPage';
import FinancialPage from './pages/dashboard/FinancialPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="bot-activation" element={<BotActivationPage />} />
        <Route path="investment" element={<InvestmentPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="deposit" element={<DepositPage />} />
        <Route path="transfer" element={<TransferPage />} />
        <Route path="financial" element={<FinancialPage />} />
      </Route>
    </Routes>
  );
};

export default App;
