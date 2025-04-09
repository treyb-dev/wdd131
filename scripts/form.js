// Product data array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the product dropdown dynamically
window.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    // Add placeholder option for the select element
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = "Select a Product...";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    productSelect.appendChild(placeholderOption);

    // Populate remaining options from the products array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Handle form submission and review count
const form = document.getElementById('product-review-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Increment review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0; // Ensure reviewCount is a number
    reviewCount += 1; // Increment the count
    localStorage.setItem('reviewCount', reviewCount); // Save back to localStorage

    // Redirect to the confirmation page
    window.location.href = 'review.html';
});

// Update the footer with the last modified date of the document
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedDate = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;
});
