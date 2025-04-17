// Get references to the form and success message
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Handle the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save form data to localStorage (optional, for other use like future reference)
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);

    // Display the success message
    successMessage.style.display = 'block';

    // Optionally: Clear form data after submission
    form.reset();
});
