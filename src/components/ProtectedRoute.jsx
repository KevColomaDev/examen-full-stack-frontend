import { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import PropTypes from 'prop-types'

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, verify } = useContext(SessionContext)
  const [loading, setLoading] = useState(true)
  const [checkedAuth, setCheckedAuth] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      await verify()
      setCheckedAuth(true)
      setLoading(false)
    };
    checkAuth()
  }, [verify])

  if (loading || !checkedAuth) {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <button
        type="button"
        className="bg-sky-800 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 cursor-not-allowed duration-[500ms,800ms]"
        disabled
      >
        <div className="flex items-center justify-center m-[10px]">
          <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
          <div className="ml-2">Verificando...</div>
        </div>
      </button>
    </div>
  )
}


  if (!isAuthenticated) {
    window.location.href = '/login'
    return null;
  }

  return children
};

ProtectedRoute.propTypes = {
  children: PropTypes.node
};
