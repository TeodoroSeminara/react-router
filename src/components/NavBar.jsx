import { NavLink } from "react-router-dom";

const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Chi siamo" },
    { path: "/product", label: "Prodotti" },
];

const NavBar = () => {

    return (
        <nav>
            <ul className="navbar-list">
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.label} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar