// LanguageUtils.js
import en from './translations/en.json';
import fr from './translations/fr.json';

const translations = {
  en,
  fr
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
  switch (country) {
    case 'nigeria':
      return 'en'; // English for Nigeria
    case 'france':
      return 'fr'; // French for France
    // Add more country-language mappings as needed
    default:
      return 'en'; // Default to English
  }
};

export default getTranslation;
