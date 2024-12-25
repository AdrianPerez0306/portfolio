import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import { AppRouter } from './routing/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter></AppRouter>
    </>
  )
}

export default App
