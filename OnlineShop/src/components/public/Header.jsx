import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from 'react-i18next';

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
    window.location.href = '/'; // или Navigate, если используешь useNavigate
  };

  return (
    <header className="py-3 mb-3 border-bottom bg-success-subtle">
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: '1fr 2fr' }}
      >
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
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

        <div className="d-flex align-items-center justify-content-end gap-3">
          <form className="w-100 me-3" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              🌍 {(() => {
                switch (i18n.language) {
                  case 'en': return '🇬🇧';
                  case 'ru': return '🇷🇺';
                  case 'ee': return '🇪🇪';
                  default: return '🌍 Language';
                }
              })()}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
              {[
                { code: 'en', label: 'English' },
                { code: 'ru', label: 'Русский' },
                { code: 'ee', label: 'Eesti' },
              ].map((lang) => (
                <li key={lang.code}>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage(lang.code)}
                    disabled={lang.code === i18n.language}
                  >
                    {lang.label}
                    {lang.code === i18n.language && ' ✅'}
                  </button>
                </li>
              ))}
            </ul>
          </div>



          {isAuthenticated ? (
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
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    {t('menu.logout') || 'Sign out'}
                  </button>
                </li>
              </ul>
            </div>
          ) : (            

            <button type="button" class="btn " title="login" onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"></path>
                <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"></path>
              </svg>
              {/* {t('menu.logout')} */}
            </button>

          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
