import React from 'react';
import { useTranslation } from 'react-i18next';
import AdminAppLayout from '../../../components/admin/AdminAppLayout';

const AdminHomePage = () => {
  const { t } = useTranslation();

  return (
    <AdminAppLayout>
      <div className="p-4">
        <h1>{t('login')} Успешен!</h1>
        <p>Вы вошли в систему. Используйте меню для навигации.</p>
      </div>
    </AdminAppLayout>
  );
};

export default AdminHomePage;
