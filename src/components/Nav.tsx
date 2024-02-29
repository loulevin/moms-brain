import { NavLink } from "react-router-dom"


export const Nav = () => {
    return (
        <nav className="p-3 flex flex-col">
            <ul className="gap-3">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/calender" className="ml-3">Calender</NavLink>
            </ul>
        </nav>
    )
}