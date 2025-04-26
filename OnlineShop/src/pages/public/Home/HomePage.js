import React, { useState, useEffect } from "react";
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

        
        {/* Sidebar layout */}
        <div className="d-flex justify-content-center">
        <div className="container-xl pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto">
          <div className="row flex-grow-sm-1 flex-grow-0 w-100">

            {/* Sidebar */}
            <aside className="col-sm-3 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
              <div className="bg-white border rounded-3 p-1 h-100 sticky-top">
                <ul className="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
                  {publicRoutes.map((route, idx) => (
                    <li key={idx} className="nav-item">
                      <Link
                        to={route.path}
                        className="nav-link px-2 text-truncate d-flex align-items-center gap-2 text-dark"
                      >
                        <i
                          className={`bi ${idx === 0
                              ? "bi-speedometer"
                              : idx === 1
                                ? "bi-card-text"
                                : idx === 2
                                  ? "bi-box-seam"
                                  : idx === 3
                                    ? "bi-handbag"
                                    : idx === 4
                                      ? "bi-bag-heart"
                                      : idx === 5
                                        ? "bi-house-heart"
                                        : idx === 6
                                          ? "bi-briefcase"
                                          : idx === 7
                                            ? "bi-heart-pulse"
                                            : idx === 8
                                              ? "bi-controller"
                                              : idx === 9
                                                ? "bi-bicycle"
                                                : idx === 10
                                                  ? "bi-cpu"
                                                  : idx === 11
                                                    ? "bi-building"
                                                    : "bi-dot"
                            } fs-5 text-dark`}
                        ></i>
                        <span className="d-none d-sm-inline">{route.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>


            {/* Main content */}
            <main className="col overflow-auto h-100">
              {/* Promotional section */}
              <div className="bg-warning-subtle border rounded-3 p-3 mb-4">
                <h5 className="mb-2">🔥 {t("home.promoTitle") || "Don't miss our special deals!"}</h5>
                <p>{t("home.promoText") || "Check out the latest discounts and offers available for a limited time."}</p>
              </div>

              {/* New Arrivals section */}
              <div className="bg-light border rounded-3 p-3 mb-4">
                <h4 className="mb-3">🆕 {t("home.newArrivals") || "New Arrivals"}</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
                  {[...Array(8)].map((_, idx) => (
                    <div className="col" key={idx}>
                      <div className="card h-100">
                        <img src="/images/default-user.jpg" className="card-img-top" alt={`Item ${idx + 1}`} />
                        <div className="card-body">
                          <h6 className="card-title">New Product {idx + 1}</h6>
                          <p className="card-text small">{t("home.sampleText")}</p>
                          <b className="card-text small">1000$</b>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular section */}
              <div className="bg-light border rounded-3 p-3">
                <h4 className="mb-3">🌟 {t("home.popularItems") || "Popular Items"}</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
                  {[...Array(8)].map((_, idx) => (
                    <div className="col" key={idx}>
                      <div className="card h-100">
                        <img src="/images/default-user.jpg" className="card-img-top" alt={`Popular Item ${idx + 1}`} />
                        <div className="card-body">
                          <h6 className="card-title">Popular Product {idx + 1}</h6>
                          <p className="card-text small">{t("home.sampleText")}</p>
                          <button className="btn btn-sm btn-outline-primary w-100">{t("home.addToCart") || "Add to Cart"}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>

          </div>
        </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
