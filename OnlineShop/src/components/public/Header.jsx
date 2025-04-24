import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const publicRoutes = [
    { path: "/public/home", label: "Home" },
    { path: "/public/auto", label: "Auto" },
    { path: "/public/realty", label: "Realty" },
    { path: "/public/service", label: "Service" },
    { path: "/public/fashion-style-beauty", label: "Fashion & Beauty" },
    { path: "/public/childrens-products", label: "Children's Products" },
    { path: "/public/house-garden", label: "House & Garden" },
    { path: "/public/job", label: "Job" },
    { path: "/public/pet", label: "Pet" },
    { path: "/public/entertainment-and-hobbies", label: "Entertainment & Hobbies" },
    { path: "/public/sports-equipment", label: "Sports Equipment" },
    { path: "/public/electronic", label: "Electronic" },
    { path: "/public/everything-for-business", label: "Everything for Business" }
  ];
  

  return (
    <>
      <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: '1fr 2fr' }}
        >
          {/* Логотип с дропдауном */}
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Bootstrap menu"
            >
              <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li><a className="dropdown-item active" href="#">Overview</a></li>
              <li><a className="dropdown-item" href="#">Inventory</a></li>
              <li><a className="dropdown-item" href="#">Customers</a></li>
              <li><a className="dropdown-item" href="#">Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Reports</a></li>
              <li><a className="dropdown-item" href="#">Analytics</a></li>
            </ul>
          </div>

          {/* Поиск + язык + аватар */}
          <div className="d-flex align-items-center justify-content-end gap-3">
            <form className="w-100 me-3" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Языковой переключатель */}
            <div className="btn-group" role="group" aria-label="Language switcher">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => changeLanguage('ru')}
              >
                RU
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => changeLanguage('ee')}
              >
                EE
              </button>
            </div>

            <div className="flex-shrink-0 dropdown">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-body-tertiary border rounded-3" style={{ height: '300px' }}></div>
          <div className="bg-body-tertiary border rounded-3" style={{ height: '300px' }}></div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
