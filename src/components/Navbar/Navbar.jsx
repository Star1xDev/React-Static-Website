import React, { useState } from "react";
import "./Navbar.css"
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        console.log("button clicked");
        setOpenMenu(!openMenu);
    }
    return ( 
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h2 className="logo">Star1xDev</h2>
                    <ul>
                        <li>
                            <a  className="menu-item">Home</a>
                        </li>
                        <li>
                            <a  className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a  className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a  className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Hire me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        x
                    </button>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;