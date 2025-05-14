// Image slider for Home page
const sliderImages = [
    "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5799685/pexels-photo-5799685.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentImg = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Slider logic (only if slider exists)
    const sliderImg = document.getElementById('sliderImg');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (sliderImg && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentImg = (currentImg - 1 + sliderImages.length) % sliderImages.length;
            sliderImg.src = sliderImages[currentImg];
        });
        nextBtn.addEventListener('click', () => {
            currentImg = (currentImg + 1) % sliderImages.length;
            sliderImg.src = sliderImages[currentImg];
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMsg = document.getElementById('formMsg');

            // Simple validation
            if (!name || !email || !message) {
                formMsg.textContent = "Please fill in all fields.";
                formMsg.style.color = "#ff006e";
                return;
            }
            // Email format check
            if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
                formMsg.textContent = "Please enter a valid email address.";
                formMsg.style.color = "#ff006e";
                return;
            }
            formMsg.textContent = "Thank you for contacting us. ";
            formMsg.style.color = "#2ecc40";
            contactForm.reset();
        });
    }
});