// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/enTranslation.json';
import uaTranslation from './locales/uaTranslation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

const savedLanguage = localStorage.getItem('language') ?? 'en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    lng: savedLanguage,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log('i18n initialized successfully');
  })
  .catch((error) => {
    console.error('Error initializing i18n:', error);
  });

export default i18n;
