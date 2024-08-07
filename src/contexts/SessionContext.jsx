import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { verifyRequest } from "../api/auth"

export const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    }
    verify()
  }, [])
  return (
    <SessionContext.Provider value={{isAuthenticated, loading}}>
      {children}
    </SessionContext.Provider>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}