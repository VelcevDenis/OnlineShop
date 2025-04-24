import React from "react";
import { useTranslation } from "react-i18next";
import "./JobPage.css";

const JobPage = () => {
  const { t } = useTranslation();
  return (
    <div className="public-page-container">
      <h1>{t("job.title")}</h1>
      <p>{t("job.description")}</p>
    </div>
  );
};

export default JobPage;