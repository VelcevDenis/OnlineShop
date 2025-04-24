import React from "react";
import { useTranslation } from "react-i18next";
import "./SportsEquipmentPage.css";

const SportsEquipmentPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("sportsEquipment.title")}</h1>
      <p>{t("sportsEquipment.description")}</p>
    </div>
  );
};

export default SportsEquipmentPage;