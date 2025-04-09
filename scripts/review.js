window.addEventListener('DOMContentLoaded', () => {
    // Get the review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;

    // Update the review count in the HTML
    document.getElementById('review-count').textContent = reviewCount;
});
