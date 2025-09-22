document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".mega-trigger");

    triggers.forEach(trigger => {
        const menu = trigger.querySelector(".mega-menu");

        // Mouse over navigation items - Show Menu
        trigger.addEventListener("mouseenter", () => {
            menu.style.display = "block";
        });

        // Mouse move - Determine if it exceeds 45% of the screen height
        document.addEventListener("mousemove", (e) => {
            if (e.clientY > window.innerHeight * 0.5) {
                menu.style.display = "none";
            }
        });

        // Mouse off the navigation item itself - Hide Menu
        trigger.addEventListener("mouseleave", () => {
            menu.style.display = "none";
        });
    });
});