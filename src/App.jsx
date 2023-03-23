import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screen/Home/Home'
import DetailPage from './screen/DetailPage/DetailPage'
import { useContext } from 'react'
import ThemeContext from './contexts/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div data-bs-theme={theme} className="App text-body bg-body min-vh-100">
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:userId/comments' element={<DetailPage />} />
        
     </Routes>
    </div>
  )
}

export default App
