// Products Data
const products = [
    {
        id: 1,
        title: "iPhone 15 Pro Max",
        price: 119900,
        originalPrice: 139900,
        image: "https://images.unsplash.com/photo-1690489876623-e9b1f91e6699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        discount: 14
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra",
        price: 109900,
        originalPrice: 129900,
        image: "https://images.unsplash.com/photo-1701729674813-9f97c1ca3427?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        discount: 15
    },
    {
        id: 3,
        title: "Sony WH-1000XM5 Headphones",
        price: 29900,
        originalPrice: 34900,
        image: "https://images.unsplash.com/photo-1613040809021-b4ef4a483e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        discount: 14
    },
    {
        id: 4,
        title: "MacBook Air M2",
        price: 99900,
        originalPrice: 119900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        discount: 17
    },
    {
        id: 5,
        title: "Nike Air Jordan 1",
        price: 12900,
        originalPrice: 15900,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        discount: 19
    },
    {
        id: 6,
        title: "Apple Watch Series 9",
        price: 42900,
        originalPrice: 49900,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        discount: 14
    }
];

// Cart Array
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartCount = document.getElementById('cartCount');
const overlay = document.getElementById('overlay');
const closeCart = document.getElementById('closeCart');
const cartBody = document.getElementById('cartBody');
const cartFooter = document.getElementById('cartFooter');
const totalItems = document.getElementById('totalItems');
const totalAmount = document.getElementById('totalAmount');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
});

// Render Products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount-badge">${product.discount}% off</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star${product.rating >= 5 ? '' : '-half-alt'}"></i>
                    <span>(${product.rating})</span>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Add Event Listeners to Add to Cart Buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEvent