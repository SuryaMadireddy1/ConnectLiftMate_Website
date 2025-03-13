        document.addEventListener("DOMContentLoaded", function () {
            VANTA.DOTS({
                el: "#vanta-bg",  // Apply Vanta.js to this wrapper, not directly on the header
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 400.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,  // Dots color
                color2: 0xffffff, // Secondary dots color
                backgroundColor: "transparent", // Keep it transparent
                size: 3.5,
                spacing: 35.00,
                showLines: true
            });
        });

document.addEventListener("DOMContentLoaded", function () {
    const featureCards = document.querySelectorAll(".feature-card");

    function fadeInOnScroll() {
        featureCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");

    function fadeInOnScroll() {
        steps.forEach((step) => {
            const stepTop = step.getBoundingClientRect().top;
            if (stepTop < window.innerHeight - 50) {
                step.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const templateCards = document.querySelectorAll(".template-card");

    function fadeInOnScroll() {
        templateCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});    