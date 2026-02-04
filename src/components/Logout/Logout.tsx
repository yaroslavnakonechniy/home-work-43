/* import { authService } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = confirm("Do you wanna logout, bro?");
        if (!confirmed) return;
       
        authService.logout();
        return navigate ('/login');
    }

    return (
        <>
            <button onClick={handleLogout}>Loguot</button>
        </>
    )
} */