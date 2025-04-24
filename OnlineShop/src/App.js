// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./global.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import RoutesComponent from "./routes/routes"; // Импортируем маршруты

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleStorage = () => {
      const newToken = localStorage.getItem("token");
      if (!newToken) setToken(null);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>      
      <RoutesComponent token={token} /> {/* Используем компонент RoutesComponent */}
    </Router>
  );
};

export default App;
