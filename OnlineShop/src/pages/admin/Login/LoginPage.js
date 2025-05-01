import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { login } from '../../../services/authService';
import "./LoginPage.css";

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/admin/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await login({ username, password }); // ВАЖНО: access_token
      setToken(access_token);
      localStorage.setItem('token', access_token);
      navigate('/admin/home');
      toast.success('Успешный вход');
    } catch (error) {
      console.error('Ошибка входа', error);
      toast.error(error.response?.data?.detail || 'Ошибка входа');
    }
  };

  return (
    <main className="d-flex align-items-center py-4 bg-body-tertiary vh-100">
      <div className="form-signin w-100 m-auto text-center">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="logo" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">{t('please_sign_in')}</h1>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">{t('username')}</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">{t('password')}</label>
          </div>

          <div className="d-flex justify-content-between gap-2 mb-2">
            <button className="btn btn-primary w-50 py-2" type="submit">
              {t('sign_in')}
            </button>
            <button className="btn btn-outline-success w-50 py-2" type="button" onClick={() => navigate("/new-account")}>
              {t('register')}
            </button>
          </div>
          <button className="btn btn-outline-secondary w-100 py-2 mb-3" type="button">
            <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter" /></svg>
            {t('sign_in_with_twitter')}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
