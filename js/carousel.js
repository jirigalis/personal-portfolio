document.addEventListener("DOMContentLoaded", () => {
    const carouselLeft = document.querySelector(".carousel-wrapper-left");
    const carouselRight = document.querySelector(".carousel-wrapper-right");
    const items = document.querySelectorAll(".carousel-item");
    const itemsLength = items.length / 2;
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselLeft.style.transform = `translateX(${offset}%)`;
        carouselRight.style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("bg-gray-800", index === currentIndex);
            dot.classList.toggle("bg-gray-400", index !== currentIndex);
        });
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % (itemsLength);
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + itemsLength) % itemsLength;
        updateCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initialize carousel
    updateCarousel();
});