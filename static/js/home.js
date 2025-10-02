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



