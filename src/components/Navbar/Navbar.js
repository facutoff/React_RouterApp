import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import useAuth from "../../auth/useAuth";
import './Navbar.css'

export default function Navbar() {
    const auth = useAuth()
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName='active'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/categories' activeClassName='active'>Categories</NavLink>
                </li>
                <li>
                    <NavLink to='/login' activeClassName='active'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register' activeClassName='active'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/payments' activeClassName='active'>Payments</NavLink>
                </li>
                <li>
                    <button onClick={auth.logout} >LogOut</button>
                </li>
            </ul>
        </nav>
    )
}
