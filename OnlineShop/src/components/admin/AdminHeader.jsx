import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { adminRoutes } from '../../routes/adminRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { logout } from '../../utils/logout';

const AdminHeader = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100">
      {/* Sidebar */}
      <div
        className={`offcanvas-md offcanvas-start text-bg-dark ${menuOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="sidebar"
        style={{ width: '280px', visibility: menuOpen ? 'visible' : '' }}
      >
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title text-white">{t('menu')}</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setMenuOpen(false)}
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-3">
          <Link to="/admin/home" className="d-flex align-items-center mb-3 text-white text-decoration-none">
            <svg className="bi pe-none me-2" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-5">Admin Panel</span>
          </Link>
          <hr />

          {/* Accordion Menu */}
          <div className="accordion" id="sidebarAccordion">
            {adminRoutes.map((section) => (
              <div key={section.id} className="accordion-item bg-dark border-0">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${section.id}`}
                  >
                    {section.label}
                  </button>
                </h2>
                <div
                  id={section.id}
                  className="accordion-collapse collapse"
                  data-bs-parent="#sidebarAccordion"
                >
                  <ul className="list-unstyled fw-normal pb-1 small">
                    {section.children.map((item, i) => (
                      <li key={i}>
                        <Link to={item.path} className="nav-link text-white ps-4">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="dropdown mt-auto">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://github.com/mdo.png"
                alt="User"
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{t('menu.user')}</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a className="dropdown-item" href="#">{t('menu.settings')}</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={logout}
                >
                  {t('menu.logout')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar for mobile */}
      <div className="d-md-none bg-dark text-white p-2">
        <button className="btn btn-outline-light" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ {t('menu.toggle')}
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
