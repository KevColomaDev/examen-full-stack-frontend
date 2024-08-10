import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { verifyRequest } from "../api/auth"
import { logoutRequest } from "../api/auth"

export const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const logout = async () => {
    try {
      await logoutRequest()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const verify = async () => {
      try {
        const response = await verifyRequest()
        if (response.msg === 'Authorized') {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (isAuthenticated === true) {
      verify()
    }
    
  }, [isAuthenticated])
  
  
  
  return (
    <SessionContext.Provider value={{ isAuthenticated, logout, setIsAuthenticated }}>
      {children}
    </SessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node
}