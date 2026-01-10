import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useProducts } from "@/hooks/useProducts";
import { ProductCategory } from "@/types/product.types";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import Loader from "@/components/common/Loader";
import "./ProductsView.css";

const ProductsView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>("fruits");
  const { products, loading, error } = useProducts(selectedCategory);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="products-error">
        <p>
          {t.common.error}: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="products-view">
      {/* Category Tabs */}
      <div className="category-tabs">
        <button
          className={`category-tab ${
            selectedCategory === "fruits" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("fruits")}
        >
          {t.products.fruits}
        </button>
        <button
          className={`category-tab ${
            selectedCategory === "vegetables" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("vegetables")}
        >
          {t.products.vegetables}
        </button>
      </div>

      {/* Products Grid */}
      <div className="container">
        {products.length === 0 ? (
          <div className="products-empty">
            <p>{t.products.noProducts}</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProductId(product.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </div>
  );
};

export default ProductsView;
