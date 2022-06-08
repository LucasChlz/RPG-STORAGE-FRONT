import { Routes, Route } from 'react-router-dom'
import './index.css'
import Register from './Pages/Register'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/register" element={ <Register /> } /> 
        </Routes>
    </div>
  )
}

export default App