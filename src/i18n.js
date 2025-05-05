import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/eng.json';
import ruTranslation from './locales/uzv.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      eng: {
        translation: enTranslation,
      },
      uzv : {
        translation: ruTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
