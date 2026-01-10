import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Product } from "@/types/product.types";
import "./ProductModal.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language, t } = useLanguage();

  const productName = language === "en" ? product.nameEn : product.nameAr;
  const productDescription =
    language === "en" ? product.descriptionEn : product.descriptionAr;

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={t.common.close}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="modal-image">
          <img
            src={product.imageUrl}
            alt={productName}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/600x600?text=No+Image";
            }}
          />
        </div>

        {/* Product Info */}
        <div className="modal-content">
          <h2 className="modal-title">{productName}</h2>
          {productDescription && (
            <p className="modal-description">{productDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
