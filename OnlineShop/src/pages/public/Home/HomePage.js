import React from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../components/public/AppLayout";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../routes/publicRoutes";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <div className="public-page-container">
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
        <div className="container-fluid pb-3">
          <div className="d-grid gap-3" style={{ gridTemplateColumns: '0.3fr 2fr' }}>

            <ul className="list-group">
              {publicRoutes.map((route, idx) => (
                <li key={idx} className="list-group-item list-group-item-action">
                  <Link to={route.path} className="text-decoration-none">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>


            <div className="bg-body-tertiary border rounded-3" style={{ height: '30vh' }}></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;