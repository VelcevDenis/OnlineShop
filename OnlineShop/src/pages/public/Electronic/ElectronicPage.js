import React from "react";
import { useTranslation } from "react-i18next";
import "./ElectronicPage.css";

const ElectronicPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("electronic.title")}</h1>
      <p>{t("electronic.description")}</p>
    </div>
  );
};

export default ElectronicPage;