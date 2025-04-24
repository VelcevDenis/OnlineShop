import React from "react";
import { useTranslation } from "react-i18next";
import "./ServicePage.css";

const ServicePage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("service.title")}</h1>
      <p>{t("service.description")}</p>
    </div>
  );
};

export default ServicePage;