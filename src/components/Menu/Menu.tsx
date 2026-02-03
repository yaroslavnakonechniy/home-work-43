
import { NavLink } from "react-router-dom"
import styles from "./menu.module.css"

const getLinkClass = ({ isActive, isPending }: any) =>
  isPending
    ? styles.pending
    : isActive
    ? styles.active
    : "";

export const Menu = () => {
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
        </>
    )
}