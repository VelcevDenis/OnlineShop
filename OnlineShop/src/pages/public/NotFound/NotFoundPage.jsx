import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;