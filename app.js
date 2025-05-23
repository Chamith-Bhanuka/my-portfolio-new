document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Web Developer", "Software Engineer", "IOT Developer"];
    const roleElement = document.getElementById("role");
    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole() {
        roleElement.style.opacity = 0;
        setTimeout(() => {
            roleElement.textContent = "";
            letterIndex = 0;
            typingInterval = setInterval(() => {
                if (letterIndex < roles[roleIndex].length) {
                    roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        roleIndex = (roleIndex + 1) % roles.length;
                        typeRole();
                    },1000);
                }
            }, 150);
            roleElement.style.opacity = 1;
        }, 500);
    }
    typeRole();
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.project-list li');
    const projects = document.querySelectorAll('.project-box');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn)=> btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute("data-filter");

            projects.forEach((project) => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                }else {
                    project.style.display = "none";
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.dark-light-btn');
    const htmlElement = document.documentElement;

    // Retrieve saved mode from local storage
    const currentMode = localStorage.getItem('mode');

    if (currentMode === 'light') {
        htmlElement.classList.add('light-mode');
        toggleButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
    } else {
        htmlElement.classList.remove('light-mode');
        toggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }

    // Ensure button exists before adding the event listener
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            htmlElement.classList.toggle('light-mode');

            // Check the updated mode and set the correct button icon
            const isLightMode = htmlElement.classList.contains('light-mode');
            toggleButton.innerHTML = isLightMode
                ? '<i class="fa-regular fa-moon"></i>'
                : '<i class="fa-regular fa-sun"></i>';

            // Store the updated mode in local storage
            localStorage.setItem('mode', isLightMode ? 'light' : 'dark');
        });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('ul li a');

    function setActiveLink() {
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);


});


