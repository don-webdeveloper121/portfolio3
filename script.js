document.addEventListener('DOMContentLoaded', function () {
    var wrapper2 = document.querySelector('.wrapper2');
    var background2 = document.querySelector('.wrapper2');

    

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;

        // Parallax effect for the background images
        parallax(background2, scrolled, 0.2);
    });
});

// Function for parallax effect
function parallax(element, scrollPosition, speed, initialOffset = 0) {
    var offset = initialOffset - scrollPosition * speed;
    element.style.transform = 'translateY(' + offset + 'px)';
}

document.addEventListener('DOMContentLoaded', function () {
    var wrapper3 = document.querySelector('.wrapper3');
    var background3 = document.querySelector('.wrapper3');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY;

        function parallax(element, scrollPosition, speed, initialOffset = 0) {
            var offset = initialOffset - scrollPosition * speed;
            element.style.transform = 'translateY(' + offset + 'px)';
        }

        // Call the parallax function with appropriate parameters
        parallax(wrapper3, scrolled, 0.2);
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const moonButton = document.getElementById('moonButton');
    const body = document.body;
    const stacks = document.querySelector('.stacks');
    const icons = document.querySelector('.icons')

    moonButton.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        stacks.classList.toggle('dark-mode-stacks'); // Toggle a class directly on .stacks

        // Get all stack elements
        const stackElements = document.querySelectorAll('.stack1, .stack2, .stack3, .stack4, .stack5');

        // Toggle the dark mode class on each stack element
        stackElements.forEach((stack) => {
            stack.classList.toggle('dark-mode');
        });

        // Store the user's preference in localStorage for persistence
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Check user's preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        stacks.classList.add('dark-mode-stacks');

        // Add dark mode class to each stack element
        const stackElements = document.querySelectorAll('.stack1, .stack2, .stack3, .stack4, .stack5');
        stackElements.forEach((stack) => {
            stack.classList.add('dark-mode');
        });
    }
});

