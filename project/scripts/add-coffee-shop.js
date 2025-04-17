document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-coffee-shop-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

    
        const requiredFields = ['shop-name', 'shop-description', 'shop-location', 'shop-hours', 'shop-phone'];
        for (const field of requiredFields) {
            if (!document.getElementById(field).value.trim()) {
                alert(`${field.replace(/-/g, ' ')} is required.`);
                return; 
            }
        }

    
        successMessage.style.display = 'block';
        form.style.display = 'none';

        form.reset();
    });
});
