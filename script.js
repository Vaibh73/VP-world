document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const dynamicText = document.querySelector('.dynamic-text');
const textArray = ['Code', 'Learn', 'Repeat'];
let textIndex = 0;

function updateText() {
    dynamicText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}
setInterval(updateText, 2000);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
});
