import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "./config";

export const uploadProductImage = async (
  file: File,
  productId: string
): Promise<string> => {
  const storageRef = ref(storage, `products/${productId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const deleteProductImage = async (imageUrl: string): Promise<void> => {
  const imageRef = ref(storage, imageUrl);
  await deleteObject(imageRef);
};

export const uploadPackagingImage = async (
  file: File,
  packagingId: string
): Promise<string> => {
  const storageRef = ref(storage, `packaging/${packagingId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
