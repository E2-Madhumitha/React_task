import { NavLink } from "react-router-dom";
// import { useAuth } from "./auth";
export const Navbar = () => {
    // const auth = useAuth();
    return (
        <nav className="primary-nav">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to="/users?category=activefilter">ACTIVE USERS</NavLink>
            <NavLink to="/users?category=resetfilter">RESET FILTER</NavLink>
            {/* {!auth.user && <NavLink to="/login">LOGIN</NavLink>} */}
        </nav>
    );
};
