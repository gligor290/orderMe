class menuItem {
    constructor(name, description, price, imageUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    render() {
        return `
            <div class="menu-item-card">
                <img src="${this.imageUrl}" alt="${this.name}" class="menu-item-image" />
                <div class="menu-item-details">
                    <div class="menu-item-title">${this.name}</div>
                    <div class="menu-item-desc">${this.description}</div>
                    <div class="menu-item-price">$${this.price.toFixed(2)}</div>
                    <button class="menu-item-order-btn">Order</button>
                </div>
            </div>
        `;
    }
}
export default menuItem;