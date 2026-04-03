
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CustomerV1_1 from './pages/customer-follow-up/v1_1/Index';
import CustomerV1_0 from './pages/customer-follow-up/v1_0/Index';
import ReferralV1_0 from './pages/referral/v1_0/Index';
import MiniFormV1_0 from './pages/mini-form/v1_0/Index';
import TrialClassV1_0 from './pages/trial-class/v1_0/Index';
import CheckInV1_0 from './pages/check-in/v1_0/Index';

export default function App() {
  return (
    <BrowserRouter basename="/tangtang">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/v1.1" element={<CustomerV1_1 />} />
        <Route path="/customer/v1.0" element={<CustomerV1_0 />} />
        <Route path="/referral/v1.0" element={<ReferralV1_0 />} />
        <Route path="/mini-form/v1.0/*" element={<MiniFormV1_0 />} />
        <Route path="/trial-class/v1.0" element={<TrialClassV1_0 />} />
        <Route path="/check-in/v1.0" element={<CheckInV1_0 />} />
      </Routes>
    </BrowserRouter>
  );
}
