import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { SessionProvider } from './contexts/SessionContext'
function App() {

  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/habitaciones" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  )
}

export default App
