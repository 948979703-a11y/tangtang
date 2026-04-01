import { Routes, Route } from 'react-router-dom';
import DataOverview from './pages/DataOverview';
import SingleForm from './pages/SingleForm';
import LeadDetail from './pages/LeadDetail';

export default function MiniFormV10() {
  return (
    <div className="app-container shadow-xl min-h-screen bg-[#f5f6f8]">
      <Routes>
        <Route index element={<DataOverview />} />
        <Route path="form/:formId" element={<SingleForm />} />
        <Route path="form/:formId/lead/:leadId" element={<LeadDetail />} />
      </Routes>
    </div>
  );
}
