import React from "react";
import { useTranslation } from "react-i18next";
import "./RealtyPage.css";

const RealtyPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("realty.title")}</h1>
      <p>{t("realty.description")}</p>
    </div>
  );
};

export default RealtyPage;