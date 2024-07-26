import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
