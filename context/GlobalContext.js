import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkConsent = () => {
        const consent = window.Cookiebot?.consent?.necessary;
        setConsentGiven(consent || false);
        console.log('Cookiebot', consent);
      };

      window.addEventListener('CookieConsentUpdate', checkConsent);
      checkConsent();

      return () => window.removeEventListener('CookieConsentUpdate', checkConsent);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ consentGiven }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);