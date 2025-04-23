import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HomePage = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="d-flex flex-column flex-md-row min-vh-100">

      {/* Sidebar (responsive) */}
      <div className={`offcanvas-md offcanvas-start text-bg-dark ${menuOpen ? "show" : ""}`} tabIndex="-1" id="sidebar" style={{ width: "280px", visibility: menuOpen ? 'visible' : '' }}>
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title text-white">Меню</h5>
          <button type="button" className="btn-close btn-close-white" onClick={() => setMenuOpen(false)}></button>
        </div>
        <div className="offcanvas-body d-flex flex-column p-3">
          <a href="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
            <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap" /></svg>
            <span className="fs-5">My App</span>
          </a>
          <hr />

          <div className="accordion" id="sidebarAccordion">

            {/* Home */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#homeMenu">
                  Домой
                </button>
              </h2>
              <div id="homeMenu" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
                <ul className="list-unstyled fw-normal pb-1 small">
                  <li><a href="/overview" className="nav-link text-white ps-4">Обзор</a></li>
                  <li><a href="/updates" className="nav-link text-white ps-4">Обновления</a></li>
                  <li><a href="/news" className="nav-link text-white ps-4">Новости</a></li>
                </ul>
              </div>
            </div>

            {/* Dashboard */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardMenu">
                  Панель
                </button>
              </h2>
              <div id="dashboardMenu" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
                <ul className="list-unstyled fw-normal pb-1 small">
                  <li><a href="/stats" className="nav-link text-white ps-4">Статистика</a></li>
                  <li><a href="/analytics" className="nav-link text-white ps-4">Аналитика</a></li>
                  <li><a href="/performance" className="nav-link text-white ps-4">Производительность</a></li>
                </ul>
              </div>
            </div>

            {/* Orders */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#ordersMenu">
                  Заказы
                </button>
              </h2>
              <div id="ordersMenu" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
                <ul className="list-unstyled fw-normal pb-1 small">
                  <li><a href="/orders/current" className="nav-link text-white ps-4">Текущие</a></li>
                  <li><a href="/orders/history" className="nav-link text-white ps-4">История</a></li>
                  <li><a href="/orders/returns" className="nav-link text-white ps-4">Возвраты</a></li>
                </ul>
              </div>
            </div>

            {/* Account */}
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#accountMenu">
                  Аккаунт
                </button>
              </h2>
              <div id="accountMenu" className="accordion-collapse collapse" data-bs-parent="#sidebarAccordion">
                <ul className="list-unstyled fw-normal pb-1 small">
                  <li><a href="/account/profile" className="nav-link text-white ps-4">Профиль</a></li>
                  <li><a href="/account/settings" className="nav-link text-white ps-4">Настройки</a></li>
                  <li><a href="/logout" className="nav-link text-white ps-4">Выход</a></li>
                </ul>
              </div>
            </div>
          </div>

          <hr />
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
              <img src="https://github.com/mdo.png" alt="User" width="32" height="32" className="rounded-circle me-2" />
              <strong>Пользователь</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li><a className="dropdown-item" href="#">Настройки</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Выйти</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Top Navbar for small screens */}
      <div className="d-md-none bg-dark text-white p-2">
        <button className="btn btn-outline-light" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ Меню
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-grow-1">
        <h1>{t('login')} Успешен!</h1>
        <p>Вы вошли в систему. Используйте меню для навигации.</p>
      </div>
    </div>
  );
};

export default HomePage;
