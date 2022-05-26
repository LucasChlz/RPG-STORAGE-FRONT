import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import './index.css'
import Register from './Pages/Register'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
        <Routes>
            <Route path="/register" element={ <Register /> } /> 
        </Routes>
    </div>
  )
}

export default App