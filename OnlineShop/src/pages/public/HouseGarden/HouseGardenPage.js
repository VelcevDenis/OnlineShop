import React from "react";
import { useTranslation } from "react-i18next";
import "./HouseGardenPage.css";

const HouseGardenPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("houseGarden.title")}</h1>
      <p>{t("houseGarden.description")}</p>
    </div>
  );
};

export default HouseGardenPage;