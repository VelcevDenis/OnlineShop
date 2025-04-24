import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // 👈 добавили

// Translation files
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import eeTranslation from './locales/ee/translation.json';

i18n
  .use(LanguageDetector) // 👈 подключаем детектор
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      ee: { translation: eeTranslation },
    },
    fallbackLng: 'ru', // если язык не определён — будет русский
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Настройки детектора (опционально)
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
