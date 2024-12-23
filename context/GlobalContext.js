import { createContext, useContext, useState, useEffect } from 'react';
import { getCookie } from '../utils/getCookie';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  console.log('GlobalContext');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkConsent = () => {
        const consent = getCookie('CookieConsent');
        setConsentGiven(consent === 'true');
        // console.log('CookieConsent', consent);
      };

      checkConsent();
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ consentGiven, setConsentGiven }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);