document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".mega-trigger");

    triggers.forEach(trigger => {
        const menu = trigger.querySelector(".mega-menu");

        if (!menu) {
            console.warn("No found .mega-menu element", trigger);
            return;
        }

        let isMouseOverTrigger = false;
        let isMouseOverMenu = false;

        trigger.addEventListener("mouseenter", () => {
            isMouseOverTrigger = true;
            menu.style.display = "block";
        });

        trigger.addEventListener("mouseleave", () => {
            isMouseOverTrigger = false;
            setTimeout(() => {
                if (!isMouseOverMenu) {
                    menu.style.display = "none";
                }
            }, 100);
        });

        menu.addEventListener("mouseenter", () => {
            isMouseOverMenu = true;
        });
        menu.addEventListener("mouseleave", () => {
            isMouseOverMenu = false;
            if (!isMouseOverTrigger) {
                menu.style.display = "none";
            }
        });

        document.addEventListener("mousemove", (e) => {
            if (menu.style.display === "block" && e.clientY > window.innerHeight * 0.4) {
                menu.style.display = "none";
                isMouseOverTrigger = false;
                isMouseOverMenu = false;
            }
        });

        document.addEventListener("wheel", () => {
            if (menu.style.display === "block") {
                menu.style.display = "none";
                isMouseOverTrigger = false;
                isMouseOverMenu = false;
            }
        });
    });
});