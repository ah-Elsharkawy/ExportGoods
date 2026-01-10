import React, { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { submitContactForm } from "@/firebase/firestore";
import Button from "@/components/common/Button";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">{t.contact.title}</h1>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {success && (
                <div className="alert alert-success">{t.contact.success}</div>
              )}
              {error && <div className="alert alert-error">{error}</div>}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <Button type="submit" fullWidth loading={loading}>
                {t.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
