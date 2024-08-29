document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // For demonstration purposes, we'll just alert the form data
        alert(`Thank you, ${name}! Your message has been sent.\n\nSubject: ${subject}\nMessage: ${message}`);

        // Reset form fields
        contactForm.reset();
    });
});
