import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./app/router"
import { Login } from './components/Login/Login'

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
