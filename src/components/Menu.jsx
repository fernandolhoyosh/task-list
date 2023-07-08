import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import { useColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import "./Menu.css"

const Menu = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <nav className="menu-nav">
            <Link to="/" className="nav-item"><AiFillHome className="nav-icons"/>Home</Link>
            <Link to="/task-list" className="nav-item"><FaTasks className="nav-icons"/>Tasks</Link>
            <Link to="/about-us" className="nav-item"><BsInfoSquareFill className="nav-icons"/>About us</Link>
            <button className="theme-button" onClick={toggleColorMode}>{colorMode === "dark" ? <BsSunFill/>:<BsMoonFill/>}</button>
        </nav>
    )
}

export default Menu;