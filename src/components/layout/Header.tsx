import React from "react";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  //   const { isRTL } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        {/* Burger Menu Icon */}
        <button
          className={`burger-button ${isMenuOpen ? "open" : ""}`}
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* Logo */}
        <div className="header-logo">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="logo-image"
            onError={(e) => {
              // Fallback if logo doesn't exist
              (e.target as HTMLImageElement).style.display = "none";
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML = '<div class="logo-placeholder">LOGO</div>';
              }
            }}
          />
        </div>

        {/* Language Switcher */}
        <div className="header-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
