import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/utils/constants";
import "./LanguageSwitcher.css";

interface LanguageSwitcherProps {
  variant?: "header" | "sidebar";
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "header",
}) => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  const nextLanguage = LANGUAGES.find((lang) => lang.code !== language);

  return (
    <button
      className={`language-switcher-btn ${variant}`}
      onClick={handleLanguageToggle}
      aria-label={`Switch to ${nextLanguage?.name}`}
    >
      {nextLanguage?.name}
    </button>
  );
};

export default LanguageSwitcher;
