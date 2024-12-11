// Toggle Navbar Menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

// Change Theme
function changeTheme() {
    const themeSelector = document.getElementById('theme-selector');
    const theme = themeSelector.value;

    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);

    // Apply the theme
    applyTheme(theme);
}

// Apply the theme based on the stored or default value
function applyTheme(theme) {
    if (theme === 'retro') {
        document.body.classList.add('retro');
        document.body.classList.remove('dark');
    } else if (theme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('retro');
    }
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
    // Get the stored theme from localStorage, default to 'retro' if none is set
    const storedTheme = localStorage.getItem('theme') || 'retro';
    applyTheme(storedTheme);

    // Update the dropdown to reflect the stored theme
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.value = storedTheme;
});


// Filter Store Items
const priceFilter = document.getElementById('price-filter');
priceFilter.addEventListener('change', () => {
    const storeItems = document.querySelectorAll('.store-item');
    const itemsArray = Array.from(storeItems);
    const order = priceFilter.value;

    const sortedItems = itemsArray.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));

        return order === 'low-high' ? priceA - priceB : priceB - priceA;
    });

    const storeContainer = document.querySelector('.store-items');
    storeContainer.innerHTML = '';
    sortedItems.forEach(item => storeContainer.appendChild(item));
});
