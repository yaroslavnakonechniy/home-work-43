import { Menu } from "../Menu/Menu"
import { Outlet } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"
import styles from "../Menu/menu.module.css"
 
export const Layout = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <div className={`theme-${theme}`}>
                <p>You can change theme</p>      |
                <button onClick={toggleTheme} className={styles.btn}>
                    {theme === "green" ? "orange" : "green"}
                </button>
                
                <Menu/>
                <Outlet/>
            </div>

        </>
    )
}