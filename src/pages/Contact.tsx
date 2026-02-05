import { useLocation } from "react-router"

export const Contact = () => {

    const location = useLocation();
    return (
        <>
            <p>You are on Contact page!</p>
            <p>your pathname :{location.pathname}</p>
            <p>your hash :{location.hash}</p>
            <p>your key:{location.key}</p>
            <p>your search:{location.search}</p>
            <p>your state:{location.state}</p>
        </>
    )
}