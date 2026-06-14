import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import DistributorProgramPage from "./pages/DistributorProgram";
import HomePage from "./pages/Home";
import MarketCoveragePage from "./pages/MarketCoverage";
import OemManufacturingPage from "./pages/OemManufacturing";
import ProductsPage from "./pages/Products";
import ShuttleTestingPage from "./pages/ShuttleTesting";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/oem-manufacturing" element={<OemManufacturingPage />} />
        <Route path="/distributor-program" element={<DistributorProgramPage />} />
        <Route path="/shuttle-testing" element={<ShuttleTestingPage />} />
        <Route path="/market-coverage" element={<MarketCoveragePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Legacy redirects */}
        <Route path="/oem-service" element={<OemManufacturingPage />} />
      </Routes>
    </Layout>
  );
}
