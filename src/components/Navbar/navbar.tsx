import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.scss"

export const Navbar:React.FC = React.memo(():JSX.Element => {
    return(
        <nav className="nav">
            <div className="container">
                <ul className="nav__list">
                    <li className="nav__list-item"><NavLink to={"/"}>Tasks</NavLink></li>
                    <li className="nav__list-item"><NavLink to={"/addTasks"}>AddTasks</NavLink></li>
                </ul>
            </div>
        </nav>
    )
})