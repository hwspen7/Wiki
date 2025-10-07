document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".two-columns");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("show");
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(
        ".peoandfish, .peoeatfish, .part-1, .medicine, .part-2"
    );

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const iframes = document.querySelectorAll("[class^='video-box-'] iframe");

    const videoObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                const dataSrc = iframe.getAttribute("data-src");
                if (dataSrc && !iframe.src) {
                    iframe.src = dataSrc;
                }
                obs.unobserve(iframe);
            }
        });
    }, { threshold: 0.01 });

    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.removeAttribute("src");
        iframe.setAttribute("data-src", src);
        videoObserver.observe(iframe);
    });
});
