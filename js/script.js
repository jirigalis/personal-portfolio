document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });
});

window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-container");

    // Delay the start of the fade-out animation by 1.5 seconds
    setTimeout(() => {
        loaderContainer.style.transition = "opacity 0.5s ease-out"; // Set transition for fade-out
        loaderContainer.style.opacity = "0"; // Start fade-out animation
    }, 750); // .75 seconds delay

    // Remove the loader from the DOM after the fade-out (1.5s delay + 0.5s animation)
    setTimeout(() => {
        loaderContainer.style.display = "none";
    }, 1250); // Total time: 0.75 s delay + 0.5 s animation
});

// Scrolling effect
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target element

        if (targetSection) {
            const targetPosition = targetSection.offsetTop; // Get the vertical position of the target

            // Animate scrolling
            anime({
                targets: [document.documentElement, document.body],
                scrollTop: targetPosition, // Scroll to the target position
                duration: 800, // Animation duration in milliseconds
                easing: 'easeInOutQuad' // Smooth easing
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const introTexts = document.querySelectorAll(".introText");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8, // Trigger when 80% of the text is visible
    };

    let lastVisibleIndex = -1;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(introTexts).indexOf(entry.target);

                // Apply changes only if the index changes (prevents flickering)
                if (index !== lastVisibleIndex) {
                    introTexts.forEach((text) => text.classList.replace("opacity-100", "opacity-20"));
                    entry.target.classList.replace("opacity-20", "opacity-100");
                    lastVisibleIndex = index;
                }
            }
        });
    }, options);

    introTexts.forEach((text) => observer.observe(text));
});