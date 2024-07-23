document.addEventListener('DOMContentLoaded', function() {
    // Error Message Handling
    function showErrorMessage() {
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.add('show');
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 5000);
    }

    // Displaying sections on scroll
    function handleScroll() {
        const sections = document.querySelectorAll('.section');
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Typewriter Effect for Headline
    const headline = "Full Stack Developer";
    let index = 0;

    function typeHeadline() {
        if (index < headline.length) {
            document.querySelector('.animated-headline').textContent += headline.charAt(index);
            index++;
            setTimeout(typeHeadline, 100);
        } else {
            document.querySelector('.animated-headline').style.border = 'none';
        }
    }

    // Display Greeting Text
    const greetingText = "Hi, I'm Parth!";
    document.getElementById('greeting').textContent = greetingText;

    typeHeadline();

    // Trigger error message as an example
    showErrorMessage();
});
