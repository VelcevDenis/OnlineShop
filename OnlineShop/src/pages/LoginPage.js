import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './LoginPage.css';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    });

    if (res.ok) {
      const data = await res.json();
      setToken(data.token);
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
      alert('Login failed');
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

          <button className="btn btn-primary w-100 py-2 mb-2" type="submit">
            {t('sign_in')}
          </button>
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
