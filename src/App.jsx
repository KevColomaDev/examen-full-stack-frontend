import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Suplies } from './pages/Suplies'
import { SessionProvider } from './contexts/SessionContext'
import { ProtectedRoute } from './components/ProtectedRoute'
function App() {

  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/habitaciones" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/suministros' element={<ProtectedRoute><Suplies /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  )
}

export default App
