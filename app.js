document.addEventListener('DOMContentLoaded', () => {
    const roles = ["Web Developer", "Software Engineer", "Embedded System Engineer"];
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


    //active section color change
    const section = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('ul li a');
});


