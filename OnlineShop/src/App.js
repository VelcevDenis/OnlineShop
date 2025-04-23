import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./global.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="language-switcher">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("ee")}>EE</button>
      </div>
      <Routes>
        <Route path="/" element={!token ? <Navigate to="/login" /> : <HomePage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
      </Routes>
    </Router>
  );
};

export default App;
