import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import OurCompany from "./pages/OurCompany";
import PrivateBusiness from "./pages/PrivateBusiness";
import ContactUs from "./pages/ContactUs";
import "./styles/variables.css";
import "./styles/global.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header onMenuClick={handleMenuToggle} isMenuOpen={isSidebarOpen} />
          <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<OurCompany />} />
              <Route path="/products" element={<Products />} />
              <Route path="/private-business" element={<PrivateBusiness />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
