import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Deshboard } from './pages/Deshboard'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/habitaciones" element={<Deshboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
