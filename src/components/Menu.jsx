import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="menu-nav">
            <Link to="/" className="nav-item"><AiFillHome className="nav-icons"/>Home</Link>
            <Link to="/task-list" className="nav-item"><FaTasks className="nav-icons"/>Task list</Link>
            <Link to="/about-us" className="nav-item"><BsInfoSquareFill className="nav-icons"/>About us</Link>
        </nav>
    )
}

export default Menu;