document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".mega-trigger");

    triggers.forEach(trigger => {
        const menu = trigger.querySelector(".mega-menu");

        // 检查 menu 是否存在
        if (!menu) {
            console.warn("未找到 .mega-menu 元素", trigger);
            return; // 跳过这个触发器
        }

        // 鼠标悬停 - 显示菜单
        trigger.addEventListener("mouseenter", () => {
            menu.style.display = "block";
        });

        // 鼠标移动 - 超过50%屏幕高度时隐藏
        document.addEventListener("mousemove", (e) => {
            if (menu.style.display === "block" && e.clientY > window.innerHeight * 0.4) {
                menu.style.display = "none";
            }
        });

        // 鼠标离开 - 隐藏菜单
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