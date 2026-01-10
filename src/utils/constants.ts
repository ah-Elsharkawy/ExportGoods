import { Language } from "@/types/content.types";

export const LANGUAGES: { code: Language; name: string; nativeName: string }[] =
  [
    { code: "en", name: "En", nativeName: "English" },
    { code: "ar", name: "ع", nativeName: "العربية" },
  ];

export const DEFAULT_LANGUAGE: Language = "en";

export const TRANSLATIONS = {
  en: {
    nav: {
      ourCompany: "Our Company",
      ourProducts: "Our Products",
      privateBusiness: "Private Business",
      contactUs: "Contact Us",
    },
    products: {
      title: "Our Products",
      fruits: "Fruits",
      vegetables: "Vegetables",
      packaging: "Packaging",
      products: "Products",
      noProducts: "No products available",
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    common: {
      close: "Close",
      loading: "Loading...",
      error: "An error occurred",
    },
  },
  ar: {
    nav: {
      ourCompany: "شركتنا",
      ourProducts: "منتجاتنا",
      privateBusiness: "الأعمال الخاصة",
      contactUs: "اتصل بنا",
    },
    products: {
      title: "منتجاتنا",
      fruits: "فواكه",
      vegetables: "خضروات",
      packaging: "التعبئة والتغليف",
      products: "المنتجات",
      noProducts: "لا توجد منتجات متاحة",
    },
    contact: {
      title: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح!",
      error: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    },
    common: {
      close: "إغلاق",
      loading: "جاري التحميل...",
      error: "حدث خطأ",
    },
  },
};
