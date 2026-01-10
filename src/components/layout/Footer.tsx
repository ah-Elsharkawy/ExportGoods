import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getContactInfo } from "@/firebase/firestore";
import { ContactInfo } from "@/types/content.types";
import "./Footer.css";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const info = await getContactInfo();
        setContactInfo(info);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="footer-logo-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML =
                      '<div class="footer-logo-placeholder">LOGO</div>';
                  }
                }}
              />
            </div>
            {contactInfo && (
              <p className="footer-address">
                {language === "en"
                  ? contactInfo.addressEn
                  : contactInfo.addressAr}
              </p>
            )}
          </div>

          {/* Contact Info */}
          {contactInfo && (
            <div className="footer-section">
              <h3 className="footer-title">
                {language === "en" ? "Contact Us" : "اتصل بنا"}
              </h3>
              <ul className="footer-contact">
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="footer-link">
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="footer-link"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                {contactInfo.whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear}{" "}
            {language === "en" ? "All rights reserved" : "جميع الحقوق محفوظة"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
