document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const animatedHeadlineElement = document.querySelector(".animated-headline");
    const sections = document.querySelectorAll(".section");
    const errorMessage = document.getElementById("error-message");
    
    // Handle greeting text
    const greetings = ["Hey, I'm Parth Bilgaiyan!", "Welcome to my portfolio!", "Let's dive into my work!"];
    let greetingIndex = 0;
    
    function updateGreeting() {
        greetingElement.textContent = greetings[greetingIndex];
        greetingIndex = (greetingIndex + 1) % greetings.length;
    }
    
    setInterval(updateGreeting, 2000);
    
    // Animate headline
    animatedHeadlineElement.style.animation = "blink-caret 1s step-end infinite";
    
    // Smooth scrolling to sections
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    
    // Fade-in effect for sections
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Show error message for demo
    function showError() {
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 5000);
    }
    
    // Uncomment below line to test error message functionality
    // showError();
});

function openBlogPage(blogId) {
    window.location.href = `./blog/${blogId}.html`;
}
