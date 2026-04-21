import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CustomerV1_1 from './pages/customer-follow-up/v1_1/Index';
import CustomerV1_0 from './pages/customer-follow-up/v1_0/Index';
import ReferralV1_0 from './pages/referral/v1_0/Index';
import GroupBuyV1_0 from './pages/small-class/v1_0/GroupBuy';
import GroupBuyV1_1 from './pages/small-class/v1_1/GroupBuy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/v1.1" element={<CustomerV1_1 />} />
        <Route path="/customer/v1.0" element={<CustomerV1_0 />} />
        <Route path="/referral/v1.0" element={<ReferralV1_0 />} />
        <Route path="/small-class/v1.0/group-buy" element={<GroupBuyV1_0 />} />
      </Routes>
    </Router>
  );
}
