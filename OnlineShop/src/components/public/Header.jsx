import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <header className="bg-white border-bottom shadow-sm py-2">

      <div className="container-fluid px-3">

        {/* Верхняя строка: логотип, язык, логин */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          {/* Лого */}
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-shop fs-3 text-success"></i>
            <h4 className="mb-0">MyShop</h4>
          </div>

          {/* Кнопка "Создать объявление" */}
          <div className="flex-grow-1 d-flex justify-content-center justify-content-md-end">
            <Link
              to={isAuthenticated ? "/create-ad" : "/login"}
              className="btn btn-success btn-sm d-flex align-items-center gap-1 px-3"
            >
              <i className="bi bi-plus-circle"></i>
              <span className="d-none d-sm-inline">Создать объявление</span>
            </Link>
          </div>

          {/* Языки и вход/аватар */}
          <div className="d-flex align-items-center gap-2">
            <select
              className="form-select form-select-sm w-auto"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ee">EE</option>
            </select>

            {isAuthenticated ? (
              <div className="dropdown">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/images/default-user.jpg"
                    alt="avatar"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li><Link className="dropdown-item" to="/profile">{t('menu.profile') || "Profile"}</Link></li>
                  <li><Link className="dropdown-item" to="/settings">{t('menu.settings') || "Settings"}</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      {t('menu.logout') || "Sign out"}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-success btn-sm">
                <i className="bi bi-box-arrow-in-right me-1"></i> {t('menu.login') || "Login"}
              </Link>
            )}
          </div>
        </div>


        {/* Поиск: всегда на новой строке на мобильных, inline на md+ */}
        <div className="mt-3 mt-md-2">
          <form className="d-flex flex-md-row flex-column">
            <input
              className="form-control me-md-2 mb-2 mb-md-0"
              type="search"
              placeholder={t('search.placeholder') || "Search..."}
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
