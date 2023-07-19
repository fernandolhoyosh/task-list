import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import { useColorMode, Tag } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import "./Menu.css"

const Menu = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const TagMenuVariant = colorMode === "dark" ? "solid" : "subtle";
    const classLinkNav = colorMode === "dark" ? "nav-item-dark" : "nav-item-light";
    
    return (
        <Tag className="menu-nav" size={"lg"} borderRadius={"none"} variant={TagMenuVariant} colorScheme="gray" >
            <Link to="/" className={classLinkNav}><AiFillHome className="nav-icons"/>Home</Link>
            <Link to="/task-list" className={classLinkNav}><FaTasks className="nav-icons"/>Tasks</Link>
            <Link to="/about-us" className={classLinkNav}><BsInfoSquareFill className="nav-icons"/>About us</Link>
            <button className="theme-button" onClick={toggleColorMode}>{colorMode === "dark" ? <BsSunFill/>:<BsMoonFill/>}</button>
        </Tag>
    )
}

export default Menu;