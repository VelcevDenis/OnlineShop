export const adminRoutes = [
  {
    id: 'homeMenu',
    label: 'Главная',
    path: '/admin/home', // добавляем прямую ссылку
  },
  {
    id: 'dashboardMenu',
    label: 'Управление Обьявлениями',
    children: [
      { path: '/admin/create/advert', label: '+ Создать' },
      { path: '/admin/stats', label: 'Статистика' },
      { path: '/admin/analytics', label: 'Аналитика' },
      { path: '/admin/my/adverts', label: 'Мои Обьявления' },
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
