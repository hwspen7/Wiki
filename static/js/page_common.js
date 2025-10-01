// static/js/page_common.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.logo-ring');
    if (!btn) return;
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Scroll
document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.getElementById('indicator');
    const stage = document.querySelector('.stage');
    const paper = document.querySelector('.paper');
    const links = Array.from(document.querySelectorAll('.menu a'));

    if (!indicator || !stage || !links.length) return;

    const sections = links.map(a => document.getElementById(a.getAttribute('href').slice(1)))
        .filter(Boolean);

    function setActiveByScroll() {
        const paperTop = paper ? paper.getBoundingClientRect().top : 0;
        const judgeY = paperTop + 8;
        let idx = 0;
        for (let i = 0; i < sections.length; i++) {
            const t = sections[i].getBoundingClientRect().top;
            if (t <= judgeY) idx = i; else break;
        }

        moveTo(idx);
    }

    function moveTo(idx) {
        const link = links[idx];
        if (!link) return;

        const linkRect = link.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        const indH = indicator.offsetHeight || 22;

        const top = linkRect.top - stageRect.top + (linkRect.height - indH) / 2;
        indicator.style.top = `${Math.round(top)}px`;

        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    }

    window.addEventListener('scroll', setActiveByScroll, { passive: true });
    if (paper) paper.addEventListener('scroll', setActiveByScroll, { passive: true });
    window.addEventListener('resize', setActiveByScroll);

    setActiveByScroll();
});


