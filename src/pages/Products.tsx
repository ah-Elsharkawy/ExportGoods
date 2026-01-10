import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FloatingMenu from "@/components/products/FloatingMenu";
import ProductsView from "@/components/products/ProductsView";
import PackagingView from "@/components/products/PackagingView";
import "./Products.css";

type ActiveTab = "products" | "packaging";

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>("products");

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="products-title">{t.products.title}</h1>
      </div>

      {/* Floating Menu */}
      <FloatingMenu activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <div className="products-content">
        {activeTab === "products" ? <ProductsView /> : <PackagingView />}
      </div>
    </div>
  );
};

export default Products;
