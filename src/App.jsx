import './App.css'
import Navbar from './components/Navbar.jsx'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import MyCart from './pages/MyCart'

function App() {
  const { home } = useSelector((state) => state.page)

  return (
    <>
      <Navbar />
      {home ? <Home /> : <MyCart />}
    </>
  )
}

export default App
