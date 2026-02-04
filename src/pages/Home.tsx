import { useEffect, useState } from "react"
import { authService } from "../services/auth"

export const Home = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        authService.getUser().then((user)=>{setUserName(user)});
    }, []);


    return (
        <>
            <h1>Hello {userName}</h1>
            <p>You are on Home page!</p>
        </>
    )
}