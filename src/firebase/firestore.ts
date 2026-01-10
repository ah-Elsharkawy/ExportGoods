import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";
import { Product, ProductCategory } from "@/types/product.types";
import {
  PageContent,
  ContactFormData,
  ContactInfo,
} from "@/types/content.types";

// Products Collection
export const PRODUCTS_COLLECTION = "products";

export const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Product[];
};

export const getProductsByCategory = async (
  category: ProductCategory
): Promise<Product[]> => {
  const q = query(
    collection(db, PRODUCTS_COLLECTION),
    where("category", "==", category),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Product[];
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt?.toDate(),
      updatedAt: docSnap.data().updatedAt?.toDate(),
    } as Product;
  }
  return null;
};

// Page Content Collection
export const CONTENT_COLLECTION = "pageContent";

export const getPageContent = async (
  section?: string
): Promise<PageContent[]> => {
  let q = query(collection(db, CONTENT_COLLECTION), orderBy("order", "asc"));

  if (section) {
    q = query(
      collection(db, CONTENT_COLLECTION),
      where("section", "==", section),
      orderBy("order", "asc")
    );
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as PageContent[];
};

// Contact Form Collection
export const CONTACT_COLLECTION = "contactForms";

export const submitContactForm = async (
  data: Omit<ContactFormData, "createdAt">
): Promise<string> => {
  const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

// Contact Info Collection
export const CONTACT_INFO_COLLECTION = "contactInfo";

export const getContactInfo = async (): Promise<ContactInfo | null> => {
  const querySnapshot = await getDocs(collection(db, CONTACT_INFO_COLLECTION));
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as ContactInfo;
  }
  return null;
};
