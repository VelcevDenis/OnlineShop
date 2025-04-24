import React from "react";
import { useTranslation } from "react-i18next";
import AppLayout from "../../../components/public/AppLayout";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../routes/publicRoutes";
import { BsHouseDoorFill } from "react-icons/bs";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <div className="public-page-container">

        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
            <li className="breadcrumb-item">
              <Link className="link-body-emphasis d-flex align-items-center" to="/">
                <BsHouseDoorFill className="me-1" />
                {t("breadcrumb.home")}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="link-body-emphasis fw-semibold text-decoration-none" to="#">
                {t("breadcrumb.section")}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {t("breadcrumb.current")}
            </li>
          </ol>
        </nav>

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
