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
      window.addEventListener('CookieConsentUpdate', () => {
        console.log('CookieConsentUpdate event detected');
        checkConsent();
      });

      window.addEventListener('CookieConsentUpdate', checkConsent);
      checkConsent();

      return () => window.removeEventListener('CookieConsentUpdate', checkConsent);
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