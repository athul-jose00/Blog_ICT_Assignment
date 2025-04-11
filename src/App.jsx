
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { HomeFilled } from '@mui/icons-material'
import Home from './components/Home'
import Add from './components/Add'


function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add"  element={<Add/>}/>
      </Routes>

      
    </>
  )
}

export default App
