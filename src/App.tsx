import './App.css'
import { createBrowserRouter } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Layout } from './components/Layout/Layout'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {index:true, element:<Home/>},
      {path:"about", element:<About/>},
      {path: "contact", element:<Contact/>}
    ]
  }
])

function App() {
  
  return (
      <RouterProvider router={router} />
  )
}

export default App
