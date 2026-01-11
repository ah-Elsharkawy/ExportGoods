import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPageContent } from "@/firebase/firestore";
import { PageContent } from "@/types/content.types";
import Loader from "@/components/common/Loader";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [content, setContent] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await getPageContent("home");
        setContent(data);
      } catch (error) {
        console.error("Error fetching home content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <Loader fullScreen />;
  }

  const heroContent = content.find(
    (c) => c.section === "home" && c.order === 1
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            {heroContent
              ? language === "en"
                ? heroContent.titleEn
                : heroContent.titleAr
              : language === "en"
              ? "Welcome to Our Company"
              : "مرحبا بكم في شركتنا"}
          </h1>
          <p className="hero-description">
            {heroContent
              ? language === "en"
                ? heroContent.contentEn
                : heroContent.contentAr
              : language === "en"
              ? "First grade fruits and vegetables delivered to you"
              : "فواكه وخضروات من الدرجة الأولى يتم توصيلها إليك"}
          </p>
          <div className="hero-actions">
            <Button size="large" onClick={() => navigate("/products")}>
              {language === "en" ? "View Products" : "عرض المنتجات"}
            </Button>
            <Button
              size="large"
              variant="outline"
              onClick={() => navigate("/contact")}
            >
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="home-sections">
        {content
          .filter((c) => c.order && c.order > 1)
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((section, index) => (
            <section
              key={section.id}
              className={`content-section ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <div className="container">
                <h2 className="section-title">
                  {language === "en" ? section.titleEn : section.titleAr}
                </h2>
                <div className="section-content">
                  <p>
                    {language === "en" ? section.contentEn : section.contentAr}
                  </p>
                </div>
              </div>
            </section>
          ))}
      </div>

      {/* Fallback content if no data from Firebase */}
      {content.length === 0 && (
        <div className="home-sections">
          <section className="content-section">
            <div className="container">
              <h2 className="section-title">
                {language === "en" ? "About Us" : "عن الشركة"}
              </h2>
              <div className="section-content">
                <p>
                  {language === "en"
                    ? "We are a leading provider of fresh fruits and vegetables, committed to quality and customer satisfaction. Our products are sourced from the best farms to ensure freshness and taste."
                    : "نحن مزود رائد للفواكه والخضروات الطازجة، ملتزمون بالجودة ورضا العملاء. يتم الحصول على منتجاتنا من أفضل المزارع لضمان النضارة والطعم."}
                </p>
              </div>
            </div>
          </section>

          <section className="content-section even">
            <div className="container">
              <h2 className="section-title">
                {language === "en" ? "Our Mission" : "مهمتنا"}
              </h2>
              <div className="section-content">
                <p>
                  {language === "en"
                    ? "To deliver the freshest produce to families and businesses, supporting healthy lifestyles and sustainable agriculture practices."
                    : "تقديم أطزج المنتجات للعائلات والشركات، ودعم أنماط الحياة الصحية وممارسات الزراعة المستدامة."}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
