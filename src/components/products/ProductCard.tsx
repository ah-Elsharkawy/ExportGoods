import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Product } from "@/types/product.types";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { language } = useLanguage();

  const productName = language === "en" ? product.nameEn : product.nameAr;

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-image">
        <img
          src={product.imageUrl}
          alt={productName}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{productName}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
