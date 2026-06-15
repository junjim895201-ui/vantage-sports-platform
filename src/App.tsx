import { Navigate, Route, Routes } from "react-router-dom";
import LocaleLayout from "./components/layout/LocaleLayout";
import AboutFactoryPage from "./pages/AboutFactory";
import ContactPage from "./pages/Contact";
import DistributorProgramPage from "./pages/DistributorProgram";
import DistributorResourcesPage from "./pages/DistributorResources";
import FactoryPartnersPage from "./pages/FactoryPartners";
import HomePage from "./pages/Home";
import MarketCoveragePage from "./pages/MarketCoverage";
import MediaLibraryPage from "./pages/MediaLibrary";
import OemManufacturingPage from "./pages/OemManufacturing";
import ProductsPage from "./pages/Products";
import ShuttleTestingPage from "./pages/ShuttleTesting";

const PAGE_ROUTES = [
  { path: "products", element: <ProductsPage /> },
  { path: "market-coverage", element: <MarketCoveragePage /> },
  { path: "factory-partners", element: <FactoryPartnersPage /> },
  { path: "about-factory", element: <AboutFactoryPage /> },
  { path: "oem-manufacturing", element: <OemManufacturingPage /> },
  { path: "distributor-program", element: <DistributorProgramPage /> },
  { path: "distributor-resources", element: <DistributorResourcesPage /> },
  { path: "shuttle-testing", element: <ShuttleTestingPage /> },
  { path: "media-library", element: <MediaLibraryPage /> },
  { path: "contact", element: <ContactPage /> },
] as const;

function localeChildren(prefix: "" | "/zh") {
  return (
    <>
      <Route index element={<HomePage />} />
      {PAGE_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="about" element={<Navigate to={`${prefix}/about-factory`} replace />} />
      <Route path="oem-service" element={<Navigate to={`${prefix}/oem-manufacturing`} replace />} />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LocaleLayout locale="en" />}>
        {localeChildren("")}
      </Route>
      <Route path="/zh" element={<LocaleLayout locale="zh" />}>
        {localeChildren("/zh")}
      </Route>
    </Routes>
  );
}
