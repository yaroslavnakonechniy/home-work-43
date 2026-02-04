import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Layout } from '../components/Layout/Layout'
import { Login } from '../components/Login/Login'
import { authService } from '../services/auth'
import { redirect } from 'react-router-dom'
//import { Logout } from '../components/Logout/Logout'
import { Post } from '../components/Posts/Post/Post'
import { PostsPage } from '../components/Posts/PostsPage'



const middlewareAuth = () => {
    if(!authService.isAuth()){
        alert("redirect")
        return redirect('/login');
    } return null;
}

export const router = createBrowserRouter([
    
    {
        path:"/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Layout />,
        middleware: [middlewareAuth],
        children:[
            {index:true, element:<Home />},
            {path:"about", element:<About />},
            {path: "contact", element:<Contact />},
            {
                path: "posts", 
                element:<PostsPage />,
                children:[
                    {index:true, element: <PostsPage />},
                    {path: ":postId", element: <Post />},
                ],
            }

        ]
    },
    {},
    {
        path: "*",
        element: <p>Url does not exist!</p>
    }

]);