const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

function changePage(targetId) {
    sections.forEach(section => section.classList.remove('active'));
    
    links.forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');


    const activeLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        changePage(id);
    });
});

document.getElementById('hero-btn').addEventListener('click', function(e) {
    e.preventDefault();
    changePage('projects');
});