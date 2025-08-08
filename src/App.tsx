
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DigitalMarketing from "./pages/digitalmarketing/DigitalMarketing";
import Layout from "./layout/layout";
export default function AppPage() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="marketing" element={<DigitalMarketing />} />
      </Route>
    </Routes>
  );
}
