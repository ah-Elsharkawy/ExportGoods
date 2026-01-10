import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./PackagingView.css";

const PackagingView: React.FC = () => {
  const { language } = useLanguage();

  // Placeholder data - will be replaced with Firebase data later
  const packagingTypes = [
    {
      id: 1,
      nameEn: "Plastic Bags",
      nameAr: "أكياس بلاستيكية",
      image: "https://via.placeholder.com/300x300?text=Plastic+Bags",
    },
    {
      id: 2,
      nameEn: "Cardboard Boxes",
      nameAr: "صناديق كرتون",
      image: "https://via.placeholder.com/300x300?text=Cardboard+Boxes",
    },
    {
      id: 3,
      nameEn: "Mesh Bags",
      nameAr: "أكياس شبكية",
      image: "https://via.placeholder.com/300x300?text=Mesh+Bags",
    },
    {
      id: 4,
      nameEn: "Wooden Crates",
      nameAr: "صناديق خشبية",
      image: "https://via.placeholder.com/300x300?text=Wooden+Crates",
    },
  ];

  return (
    <div className="packaging-view">
      <div className="container">
        <h2 className="packaging-title">
          {language === "en" ? "Packaging Options" : "خيارات التعبئة والتغليف"}
        </h2>
        <p className="packaging-subtitle">
          {language === "en"
            ? "Various packaging options for your products"
            : "خيارات تعبئة متنوعة لمنتجاتك"}
        </p>

        <div className="packaging-grid">
          {packagingTypes.map((pkg) => (
            <div key={pkg.id} className="packaging-card">
              <div className="packaging-image">
                <img
                  src={pkg.image}
                  alt={language === "en" ? pkg.nameEn : pkg.nameAr}
                />
              </div>
              <div className="packaging-name">
                {language === "en" ? pkg.nameEn : pkg.nameAr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagingView;
