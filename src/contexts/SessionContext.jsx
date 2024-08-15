import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { verifyRequest, logoutRequest } from "../api/auth";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = async () => {
    try {
      await logoutRequest();
      setIsAuthenticated(false); // Asegúrate de que isAuthenticated sea false después de cerrar sesión
    } catch (error) {
      console.log(error);
    }
  };

  const verify = async () => {
    try {
      const response = await verifyRequest();
      if (response.msg === 'Authorized') {
        setIsAuthenticated(true);
      } else {
        console.log('Not authenticated');
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false)
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      verify()
    }
  }, [isAuthenticated])

  return (
    <SessionContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated, verify }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node
};
