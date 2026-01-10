export type ProductCategory = "fruits" | "vegetables";

export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: ProductCategory;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFormData {
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: ProductCategory;
  image: File | null;
}
