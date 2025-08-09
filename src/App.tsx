
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DigitalMarketing from "./pages/digitalmarketing/DigitalMarketing";
import Layout from "./layout/layout";
import AuditRenovation from "./pages/audit/audit";
export default function AppPage() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="marketing" element={<DigitalMarketing />} />
        <Route path="audit" element={<AuditRenovation />}/>
      </Route>
    </Routes>
  );
}
