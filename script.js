document.addEventListener('DOMContentLoaded', function () {
    const showFormBtn = document.getElementById('showFormBtn');
    const contactForm = document.getElementById('contactForm');

    // Add event listener to show/hide the contact form
    showFormBtn.addEventListener('click', function () {
        contactForm.style.display = (contactForm.style.display === 'none' || contactForm.style.display === '') ? 'block' : 'none';
    });
});
