import { useState, useEffect } from "react";
import { Product, ProductCategory } from "@/types/product.types";
import { getProducts, getProductsByCategory } from "@/firebase/firestore";

export const useProducts = (category?: ProductCategory) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = category
          ? await getProductsByCategory(category)
          : await getProducts();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};
