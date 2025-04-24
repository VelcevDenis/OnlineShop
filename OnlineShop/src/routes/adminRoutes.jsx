export const adminRoutes = [
  {
    id: 'homeMenu',
    label: 'Главная',
    children: [
      { path: '/overview', label: 'Обзор' },
      { path: '/updates', label: 'Обновления' },
      { path: '/news', label: 'Новости' },
    ],
  },
  {
    id: 'dashboardMenu',
    label: 'Панель управления',
    children: [
      { path: '/stats', label: 'Статистика' },
      { path: '/analytics', label: 'Аналитика' },
      { path: '/performance', label: 'Производительность' },
    ],
  },
  {
    id: 'ordersMenu',
    label: 'Заказы',
    children: [
      { path: '/orders/current', label: 'Текущие заказы' },
      { path: '/orders/history', label: 'История заказов' },
      { path: '/orders/returns', label: 'Возвраты' },
    ],
  },
  {
    id: 'accountMenu',
    label: 'Аккаунт',
    children: [
      { path: '/account/profile', label: 'Профиль' },
      { path: '/account/settings', label: 'Настройки' },
      { path: '/logout', label: 'Выйти' },
    ],
  },
];
