import { Menu } from "../Menu/Menu"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}