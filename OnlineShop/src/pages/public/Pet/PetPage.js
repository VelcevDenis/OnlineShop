import React from "react";
import { useTranslation } from "react-i18next";
import "./PetPage.css";

const PetPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("pet.title")}</h1>
      <p>{t("pet.description")}</p>
    </div>
  );
};

export default PetPage;