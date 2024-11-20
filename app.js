// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset for sticky headers if any
                behavior: 'smooth',
            });
        }
    });
});

// Contact Form Submission (Simulated)
document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[name="Name"]').value.trim();
    const email = this.querySelector('input[name="Email"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    if (name && email && message) {
        // Simulate form submission
        const msgElement = document.getElementById('msg');
        msgElement.textContent = "Message sent successfully!";
        msgElement.style.color = "green";

        // Clear form fields
        this.reset();

        // Optionally reset message after a delay
        setTimeout(() => {
            msgElement.textContent = '';
        }, 3000);
    } else {
        // Handle validation
        const msgElement = document.getElementById('msg');
        msgElement.textContent = "Please fill out all fields.";
        msgElement.style.color = "red";
    }
});
