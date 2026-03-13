import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import About from './pages/About';
import StrategyCall from './pages/StrategyCall';
import RealEstate from './pages/industry/RealEstate';
import Clinics from './pages/industry/Clinics';
import Logistics from './pages/industry/Logistics';
import Education from './pages/industry/Education';
import Ecommerce from './pages/industry/Ecommerce';
import Insurance from './pages/industry/Insurance';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import CaseStudySpeedQueen from './pages/CaseStudySpeedQueen';

// Skeleton components for other routes to test navigation
const PlaceholderPage = ({ title }) => (
  <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h1 className="text-dark">{title}</h1>
    <p className="text-muted">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/clinics" element={<Clinics />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/strategy" element={<StrategyCall />} />
            <Route path="/contact" element={<StrategyCall />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/case-study/speed-queen-laundromat" element={<CaseStudySpeedQueen />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
