import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
export const Navbar = () => {
    const auth = useAuth();
    return (
        <nav className="primary-nav">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            {!auth.user && <NavLink to="/login">LOGIN</NavLink>}
        </nav>
    );
};
