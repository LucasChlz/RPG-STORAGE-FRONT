import { Routes, Route } from 'react-router-dom'
import './index.css'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/register" element={ <Register /> } /> 
            <Route path="/login" element={ <Login /> } /> 
        </Routes>
    </div>
  )
}

export default App