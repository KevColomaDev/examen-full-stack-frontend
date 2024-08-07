import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import PropTypes from 'prop-types'

export const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useContext(SessionContext)

  if (loading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? element : <Navigate to="/login" />
}

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired
}