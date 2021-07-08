import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"

export default function LoginPage() {
    const history = useHistory();
    const auth = useAuth();
    const location = useLocation();
    const previousObjetURL = location.state?.from
    
    const handleLogin = () => {
        auth.login()
        history.push(previousObjetURL || "/dashboard")
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>SignIn</button>
        </div>
    )
}
