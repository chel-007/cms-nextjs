// LanguageUtils.js
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import mn from './translations/mn.json';
import hi from './translations/hi.json';

const translations = {
  en,
  es,
  fr,
  mn,
  hi
  // Add more languages as needed
};

export const getTranslation = (country, key) => {
    const language = getLanguageForCountry(country);
    const navigationTranslations = translations[language]?.navigation || {}; // Get navigation translations for the language or an empty object
    return navigationTranslations[key] || key; // Return translated value for the key or the key itself
  };

const getLanguageForCountry = (country) => {
  // Logic to map country to language
  // For example:
  switch (country.toLowerCase()) {
    case 'nigeria':
      return 'en'; // English for Nigeria
    case 'spain':
      return 'es'; // Spanish for Spain
    case 'france':
      return 'fr'; // French for France
    case 'singapore':
      return 'mn';
    case 'india':
      return 'hi';
    // Add more country-language mappings as needed
    default:
      return 'en'; // Default to English
  }
};

export default getTranslation;
