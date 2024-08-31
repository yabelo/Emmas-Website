window.addEventListener('load', function () {
    document.querySelector('.about-me .image').classList.add('active');
});



document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section id
        const targetSection = document.getElementById(targetId); // Get the target section
        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


