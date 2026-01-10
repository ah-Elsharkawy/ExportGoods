export type Language = "en" | "ar";

export interface PageContent {
  id: string;
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
  section?: string;
  order?: number;
}

export interface ContactInfo {
  id: string;
  phone: string;
  email: string;
  addressEn: string;
  addressAr: string;
  whatsapp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}
