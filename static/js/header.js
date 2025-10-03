document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".mega-trigger");

    triggers.forEach(trigger => {
        const menu = trigger.querySelector(".mega-menu");

        if (!menu) {
            console.warn("未找到 .mega-menu 元素", trigger);
            return;
        }

        trigger.addEventListener("mouseenter", () => {
            menu.style.display = "block";
        });

        document.addEventListener("mousemove", (e) => {
            if (menu.style.display === "block" && e.clientY > window.innerHeight * 0.4) {
                menu.style.display = "none";
            }
        });

        trigger.addEventListener("mouseleave", () => {
            menu.style.display = "none";
        });

        document.addEventListener("wheel", () => {
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
        });
    });
});