function handleMenuToggle() {
    const menu = document.getElementById('menu');
    const body = document.body;

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        body.classList.remove('no-scroll'); // Enable scrolling
    } else {
        menu.style.display = 'flex';
        body.classList.add('no-scroll'); // Disable scrolling
    }
}

function handleMenuItemClick() {
    const menu = document.getElementById('menu');
    if (window.innerWidth <= 768) { // Adjust the width as needed
        menu.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Ensure scrolling is enabled
    }
}

// Add event listener for menu toggle
document.getElementById('menu-toggle').addEventListener('click', handleMenuToggle);

// Add event listeners to menu items
function addMenuItemListeners() {
    const menuItems = document.querySelectorAll('#menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    });
}

// Add listeners on page load
addMenuItemListeners();

// Add listeners on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        addMenuItemListeners();
    }
});
