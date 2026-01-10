import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPageContent } from "@/firebase/firestore";
import { PageContent } from "@/types/content.types";
import Loader from "@/components/common/Loader";
import "./SimplePage.css";

const PrivateBusiness: React.FC = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getPageContent("private-business");
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
        <h1>{language === "en" ? "Private Business" : "الأعمال الخاصة"}</h1>
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
            <h2>{language === "en" ? "Business Solutions" : "حلول الأعمال"}</h2>
            <p>
              {language === "en"
                ? "We offer customized solutions for businesses. Contact us to learn more about our services."
                : "نقدم حلول مخصصة للشركات. اتصل بنا لمعرفة المزيد عن خدماتنا."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateBusiness;
