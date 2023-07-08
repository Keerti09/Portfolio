/*--scroll section active link--*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*--sticky navbar--*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-section, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-section h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-section p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Web developer', 'Web designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});