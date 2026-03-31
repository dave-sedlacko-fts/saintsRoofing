// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }
});

// Contact form handler - submit via fetch to FormSubmit
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Something went wrong. Please try again or call us directly.');
            }
        }).catch(() => {
            alert('Something went wrong. Please try again or call us directly.');
        });
    });
}
