import { NavLink } from "react-router-dom"


export const Nav = () => {
    return (
        <nav className="p-3">
            <ul>
                <NavLink to="/" >Home</NavLink>
            </ul>
        </nav>
    )
}