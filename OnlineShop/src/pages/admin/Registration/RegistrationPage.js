import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { register } from "../../../services/authService";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    callingCode: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
    addressLine: '',
    dateOfBirth: '',
    gender: 'male'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Неверный email';
    if (formData.password.length < 6) newErrors.password = 'Минимум 6 символов';
    // Add more validation rules as needed
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await register(formData);
      toast.success('Регистрация прошла успешно');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Ошибка регистрации');
    }
  };

  return (
    <main className="py-4 bg-body-tertiary vh-100 overflow-auto">
      <div className="container">
        <form onSubmit={handleSubmit} className="row g-3">
          <h1 className="h3 mb-3 fw-normal text-center">Регистрация</h1>

          {[ 
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'password', label: 'Пароль', type: 'password' },
            { name: 'first_name', label: 'Имя' },
            { name: 'last_name', label: 'Фамилия' },
            { name: 'callingCode', label: 'Код страны' },
            { name: 'phone', label: 'Телефон' },
            { name: 'country', label: 'Страна' },
            { name: 'city', label: 'Город' },
            { name: 'postalCode', label: 'Почтовый индекс' },
            { name: 'addressLine', label: 'Адрес' },
            { name: 'dateOfBirth', label: 'Дата рождения', type: 'date' },
          ].map((field, idx) => (
            <div className="col-md-4" key={idx}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type || "text"}
                className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
              {errors[field.name] && (
                <div className="invalid-feedback">{errors[field.name]}</div>
              )}
            </div>
          ))}

          <div className="col-md-4">
            <label className="form-label">Пол</label>
            <select
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-success w-100 py-2" type="submit">
              Зарегистрироваться
            </button>
          </div>

          <p className="mt-5 mb-3 text-center text-body-secondary">© 2024</p>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
