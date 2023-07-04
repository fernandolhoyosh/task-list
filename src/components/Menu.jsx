import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="menu-nav">
            <Link to="/">Home</Link>
            <Link to="/task-list">Task list</Link>
            <Link to="/about-us">About us</Link>
        </nav>
    )
}

export default Menu;