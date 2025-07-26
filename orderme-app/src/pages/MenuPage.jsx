import NavBar from "../components/NavBar.jsx";
import '../styles/MenuPage.css'; // Assuming you have a CSS module for styles
import menuItem from "../menuItem.js";

const menuSections = [
    { id: 'salads', label: 'Salads' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'pasta', label: 'Pasta' },
];

const menuData ={
    salads: [ new menuItem("Caesar Salad", "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.", 8.99, "https://example.com/caesar-salad.jpg"),
                new menuItem("Greek Salad", "Mixed greens with feta cheese, olives, tomatoes, and a lemon vinaigrette.", 9.49, "https://example.com/greek-salad.jpg")],
    drinks: [ new menuItem("Coke", "Classic Coca-Cola soft drink.", 1.99, "https://example.com/coke.jpg"),
                new menuItem("Lemonade", "Freshly squeezed lemonade with a hint of mint.", 2.49, "https://example.com/lemonade.jpg")],
    pizza: [ new menuItem("Margherita Pizza", "Classic pizza with fresh mozzarella, tomatoes, and basil.", 12.99, "https://example.com/margherita-pizza.jpg"),
                new menuItem("Pepperoni Pizza", "Delicious pizza topped with pepperoni slices and mozzarella cheese.", 13.99, "https://example.com/pepperoni-pizza.jpg")],
    burgers: [ new menuItem("Cheeseburger", "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.", 10.99, "https://example.com/cheeseburger.jpg"),
                new menuItem("Veggie Burger", "Grilled vegetable patty with avocado, lettuce, and tomato.", 11.49, "https://example.com/veggie-burger.jpg")],
    pasta: [ new menuItem("Spaghetti Carbonara", "Classic Italian pasta with pancetta, eggs, and parmesan cheese.", 14.99, "https://example.com/spaghetti-carbonara.jpg"),
                new menuItem("Penne Arrabbiata", "Penne pasta in a spicy tomato sauce with garlic and chili flakes.", 13.49, "https://example.com/penne-arrabbiata.jpg")]
}

function MenuPage() {

    return (
        <div>
            <NavBar menuSections={menuSections} />
                {menuSections.map(section => (
                    <div className="menu-section" id={section.id} key={section.id}>
                        <div className="menu-section-title">{section.label}</div>
                        <div className="menu-items-list">
                            {menuData[section.id]?.map((menuItem, idx) => (
                                <div className="menu-item-card" key={idx}>
                                    <div className="menu-item-title">{menuItem.name}</div>
                                    <div className="menu-item-desc">{menuItem.description}</div>
                                    <div className="menu-item-price">${menuItem.price.toFixed(2)}</div>
                                    <button className="menu-item-order-btn">Order</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default MenuPage;