import React from "react";
import { useTranslation } from "react-i18next";
import './AutoPage.css';

const AutoPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t("auto.title")}</h1>
      <p>{t("auto.description")}</p>
    </div>
  );
};

export default AutoPage;
