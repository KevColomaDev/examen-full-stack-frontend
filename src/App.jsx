import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Suplies } from './pages/Suplies'
import { SessionProvider } from './contexts/SessionContext'
function App() {

  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/habitaciones" element={<Dashboard />} />
          <Route path='/suministros' element={<Suplies />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  )
}

export default App
