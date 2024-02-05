// MobileNav.js

import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  

  const handleContainerClick = (e) => {
    // Prevent click event from propagating to the parent div
    e.stopPropagation();
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu} >
        <div className="mobile-menu-container" onClick={handleContainerClick}>
          <h2 className="logo">Star1xDev</h2>
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
