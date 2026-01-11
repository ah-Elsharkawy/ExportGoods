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
      image:
        "https://images.unsplash.com/photo-1681373319693-0f5f3afe8485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXN0aWMlMjBiYWd8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 2,
      nameEn: "Cardboard Boxes",
      nameAr: "صناديق كرتون",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500",
    },
    {
      id: 3,
      nameEn: "Mesh Bags",
      nameAr: "أكياس شبكية",
      image:
        "https://images.unsplash.com/photo-1601654847192-c4b3e13817e2?w=600",
    },
    {
      id: 4,
      nameEn: "Wooden Crates",
      nameAr: "صناديق خشبية",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500",
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
