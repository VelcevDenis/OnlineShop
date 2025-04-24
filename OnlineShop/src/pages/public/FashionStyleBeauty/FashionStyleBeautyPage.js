import React from "react";
import { useTranslation } from "react-i18next";
import "./FashionStyleBeautyPage.css";

const FashionStyleBeautyPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("fashionStyleBeauty.title")}</h1>
      <p>{t("fashionStyleBeauty.description")}</p>
    </div>
  );
};

export default FashionStyleBeautyPage;