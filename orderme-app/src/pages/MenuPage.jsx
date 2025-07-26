import NavBar from "../components/NavBar.jsx";
import '../styles/MenuPage.css'; // Assuming you have a CSS module for styles

const menuSections = [
    { id: 'salads', label: 'Salads' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'pasta', label: 'Pasta' },
];

function MenuPage() {
    const tableId = localStorage.getItem("tableId")
    const guestName = localStorage.getItem("guestName")
    //const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <div className={"menu-page"}>
                <div className="menu-quick-links">
                    {menuSections.map(section => (
                        <button
                            key={section.id}
                            className="menu-quick-link-btn"
                            onClick={() => {
                                document.getElementById(section.id)?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {menuSections.map(section => (
                    <div className="menu-section" id={section.id} key={section.id}>
                        <div className="menu-section-title">{section.label}</div>
                        <div className="menu-items-list">
                            {/* Example menu items */}
                            <div className="menu-item-card">
                                <div className="menu-item-title">{section.label} Example</div>
                                <div className="menu-item-desc">A delicious {section.label.toLowerCase()} option.</div>
                                <button className="menu-item-order-btn">Order</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPage;