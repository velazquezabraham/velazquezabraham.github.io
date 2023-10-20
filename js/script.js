document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.getElementById(targetId);
            targetSection.style.display = 'block';

            // Scroll back to the top when a tab is clicked
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });

    // Show the button when the user scrolls down 300px from the top
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
