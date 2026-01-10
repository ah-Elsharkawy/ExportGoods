import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPageContent } from "@/firebase/firestore";
import { PageContent } from "@/types/content.types";
import Loader from "@/components/common/Loader";
import "./SimplePage.css";

const OurCompany: React.FC = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getPageContent("company");
        setContent(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading) return <Loader fullScreen />;

  return (
    <div className="simple-page">
      <div className="page-header">
        <h1>{language === "en" ? "Our Company" : "شركتنا"}</h1>
      </div>
      <div className="page-content container">
        {content.length > 0 ? (
          content.map((item) => (
            <div key={item.id} className="content-block">
              <h2>{language === "en" ? item.titleEn : item.titleAr}</h2>
              <p>{language === "en" ? item.contentEn : item.contentAr}</p>
            </div>
          ))
        ) : (
          <div className="content-block">
            <h2>{language === "en" ? "About Us" : "عنا"}</h2>
            <p>
              {language === "en"
                ? "We are a leading company in providing fresh fruits and vegetables. Our mission is to deliver quality products to our customers."
                : "نحن شركة رائدة في توفير الفواكه والخضروات الطازجة. مهمتنا هي تقديم منتجات عالية الجودة لعملائنا."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurCompany;
