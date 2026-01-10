import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./Loader.css";

interface LoaderProps {
  fullScreen?: boolean;
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = false, message }) => {
  const { t } = useLanguage();

  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <p className="loader-message">{message || t.common.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loader-inline">
      <div className="loader-spinner"></div>
      {message && <p className="loader-message">{message}</p>}
    </div>
  );
};

export default Loader;
