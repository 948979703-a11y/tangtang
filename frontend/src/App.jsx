
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomerV1_1 from './pages/CustomerFollowUp/v1_1/Index';
import CustomerV1_0 from './pages/CustomerFollowUp/v1_0/Index';
import ReferralV1_0 from './pages/Referral/v1_0/Index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/v1.1" element={<CustomerV1_1 />} />
        <Route path="/customer/v1.0" element={<CustomerV1_0 />} />
        <Route path="/referral/v1.0" element={<ReferralV1_0 />} />
      </Routes>
    </BrowserRouter>
  );
}
