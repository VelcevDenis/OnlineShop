import React from "react";
import { useTranslation } from "react-i18next";
import "./EntertainmentAndHobbiesPage.css";

const EntertainmentAndHobbiesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("entertainmentAndHobbies.title")}</h1>
      <p>{t("entertainmentAndHobbies.description")}</p>
    </div>
  );
};

export default EntertainmentAndHobbiesPage;