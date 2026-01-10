import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./FloatingMenu.css";

interface FloatingMenuProps {
  activeTab: "products" | "packaging";
  onTabChange: (tab: "products" | "packaging") => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({
  activeTab,
  onTabChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="floating-menu">
      <button
        className={`floating-menu-item ${
          activeTab === "products" ? "active" : ""
        }`}
        onClick={() => onTabChange("products")}
      >
        {t.products.products}
      </button>
      <button
        className={`floating-menu-item ${
          activeTab === "packaging" ? "active" : ""
        }`}
        onClick={() => onTabChange("packaging")}
      >
        {t.products.packaging}
      </button>
    </div>
  );
};

export default FloatingMenu;
