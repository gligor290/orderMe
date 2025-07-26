import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/navbar.css"; // Assuming you have a CSS module for styles

function Navbar({menuSections}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const tableId = localStorage.getItem("tableId");
    const guestName = localStorage.getItem("guestName");

    return (
        <nav className="navbar">
            <div className="center-vertically">
                <img src={logo} alt="Logo" className="img"/>
            </div>

            {/* Right: Menu Button */}
            <div className="center-vertically">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="menu-icon-btn"
                    >
                        <FaBars/>
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div className="dropdown-menu">
                            <p className="dropdown-info">
                                Table #{tableId}<br/>
                                {guestName || "Guest"}
                            </p>
                            <hr className="dropdown-divider"/>
                            <ul className="dropdown-list">
                                <li>
                                    <a href="/menu" className="dropdown-link">🍔 Menu</a>
                                </li>
                                <li>
                                    <a href="/summary" className="dropdown-link">🛒 My Order</a>
                                </li>
                                <li>
                                    <a href="/payment" className="dropdown-link">💳 Payment</a>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>
        </nav>
);
}

export default Navbar;
