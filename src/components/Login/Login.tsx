
import { type SubmitEvent } from "react"
import { useState } from "react"
import { authService } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const navigate = useNavigate();
    
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        
        authService.login(firstName).then(() => {navigate("/")});
    }

    return (
        <>
            <h3>Login</h3>
            {firstName}
            {lastName}
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName} placeholder="Input your FirstName"/>
                <br />
                <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} value={lastName} placeholder="Input your LastName"/>
                <br />
                <button type="submit">Login</button>
            </form>
            
        </>
    )
}