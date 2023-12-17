// Dark Mode

let darkModeIcon = document.querySelector('#dark');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark');
};

// scroll

ScrollReveal({
    // reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content', { original: 'top' });
