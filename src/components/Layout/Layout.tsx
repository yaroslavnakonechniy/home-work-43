import { Menu } from "../Menu/Menu"
import { Outlet } from "react-router"

export const Layout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}