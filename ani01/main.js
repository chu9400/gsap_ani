document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // 모든 섹션 요소 선택

    sections.forEach((section, index) => {
        const img = section.querySelector('img');
        const circle = section.querySelector('.circle');
        const title = section.querySelector('.title');
        const underline = section.querySelector('.underline');
        const lines = section.querySelectorAll('p span');

        const ani = gsap.timeline();
        ani.fromTo(img,
            { x: '-150%', rotate: -360, scale: 0.5, duration: 0.5 },
            { x: 0, scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.5)' }
        )

        ani.fromTo(
            circle,
            { y: '100%', opacity: 0, duration: 0.5 },
            { y: 0, opacity: 1, duration: 0.5 },
            0
        );
        ani.fromTo(
            title,
            { yPercent: 150, opacity: 0, ease: 'power4', duration: 0.3 },
            { yPercent: 0, opacity: 1, ease: 'power4', duration: 0.3 }
        );
        ani.fromTo(
            underline,
            { width: 0, ease: 'power4', duration: 0.3 },
            { width: '100%', ease: 'power4', duration: 0.3 }
        );

        lines.forEach(line => {
            ani.fromTo(
                line,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, ease: 'power4', duration: 0.1 }
            );
        });

        ScrollTrigger.create({
            animation: ani,
            trigger: section,
            start: "top 50%",
            toggleActions: "play reverse play reverse",

        });
    });
});
