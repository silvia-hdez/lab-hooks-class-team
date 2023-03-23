import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screen/Home/Home'
import DetailPage from './screen/DetailPage/DetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:userId/comments' element={<DetailPage />} />
        
     </Routes>
    </div>
  )
}

export default App
