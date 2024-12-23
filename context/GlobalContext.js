import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkConsent = () => {
        const consent = window.Cookiebot?.consent?.necessary;
        console.log('checkConsent called, consent:', consent);
        setConsentGiven(consent || false);
        console.log('Cookiebot', consent);
      };

      // Nasłuchuj na zdarzenie CookieConsentUpdate
      const handleCookieConsentUpdate = () => {
        console.log('CookieConsentUpdate event detected');
        checkConsent();
      };

      console.log('Adding event listener for CookieConsentUpdate');
      window.addEventListener('CookieConsentUpdate', handleCookieConsentUpdate);

      // Sprawdź zgodę przy pierwszym renderowaniu
      checkConsent();

      // Usuń nasłuchiwacz zdarzeń przy odmontowaniu komponentu
      return () => {
        console.log('Removing event listener for CookieConsentUpdate');
        window.removeEventListener('CookieConsentUpdate', handleCookieConsentUpdate);
      };
    }
  }, []);

  useEffect(() => {
    console.log('consentGiven updated:', consentGiven);
  }, [consentGiven]);

  return (
    <GlobalContext.Provider value={{ consentGiven }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);