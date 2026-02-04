import { NavLink } from "react-router-dom"
import styles from "./menu.module.css"
import { authService } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const getLinkClass = ({ isActive, isPending }: any) =>
  isPending
    ? styles.pending
    : isActive
    ? styles.active
    : "";

export const Menu = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = confirm("Do you wanna logout, bro?");
        if (!confirmed) return;
       
        authService.logout();
        return navigate ('/login');
    }
    return (
        <>
            <NavLink 
                    to="/"   
                    className={getLinkClass}
            >Go to Home</NavLink>
            |
            <NavLink 
                to="/about"   
                className={getLinkClass}
            >Go to About</NavLink>
            |
            <NavLink 
                to="/contact"   
                className={getLinkClass}
            >Go to Contact</NavLink>
                        |
            <NavLink 
                to="/posts"   
                className={getLinkClass}
            >Go to Posts</NavLink>
            |
            {authService.isAuth() 
                &&
                <button onClick={handleLogout}>Loguot</button>
            }
        </>
    )
}