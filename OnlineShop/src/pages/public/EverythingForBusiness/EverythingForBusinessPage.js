import React from "react";
import { useTranslation } from "react-i18next";
import "./EverythingForBusinessPage.css";

const EverythingForBusinessPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("everythingForBusiness.title")}</h1>
      <p>{t("everythingForBusiness.description")}</p>
    </div>
  );
};

export default EverythingForBusinessPage;