import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { verifyRequest } from "../api/auth"

export const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        setIsAuthenticated(false)
      }
    }
    verify()
  }, [])
  return (
    <SessionContext.Provider value={{isAuthenticated}}>
      {children}
    </SessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}