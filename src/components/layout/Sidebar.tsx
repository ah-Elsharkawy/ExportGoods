import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { path: "/company", label: t.nav.ourCompany },
    { path: "/products", label: t.nav.ourProducts },
    { path: "/private-business", label: t.nav.privateBusiness },
    { path: "/contact", label: t.nav.contactUs },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="sidebar-logo-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<div class="sidebar-logo-placeholder">LOGO</div>';
                }
              }}
            />
          </div>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.path} className="sidebar-menu-item">
                <Link
                  to={item.path}
                  className={`sidebar-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher in Sidebar */}
        <div className="sidebar-footer">
          <LanguageSwitcher variant="sidebar" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
