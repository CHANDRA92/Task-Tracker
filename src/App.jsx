import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import NavbarNew from './components/NavbarNew'
import Main from './components/Main'
import Test from './components/Test'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'
import Settings from './components/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <NavbarNew/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
      {/* <Navbar/>
      <Main/> */}
      {/* <Test/> */}
      
    </>
  )
}

export default App
