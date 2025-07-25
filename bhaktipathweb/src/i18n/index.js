import en from './en.json';
import hi from './hi.json';
import mr from './mr.json';

const translations = { en, mr, hi };

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  const getNested = (obj) =>
    keys.reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);

  return getNested(translations[lang]) || getNested(translations['mr']) || '';
};
