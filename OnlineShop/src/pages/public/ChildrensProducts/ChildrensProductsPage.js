import React from "react";
import { useTranslation } from "react-i18next";
import "./ChildrensProductsPage.css";

const ChildrensProductsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("childrensProducts.title")}</h1>
      <p>{t("childrensProducts.description")}</p>
    </div>
  );
};

export default ChildrensProductsPage;