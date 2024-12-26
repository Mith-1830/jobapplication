// Handling form validation for job application
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const resume = document.getElementById("resume").files.length;

    // Simple validation
    if (name === "" || email === "" || resume === 0) {
        alert("Please fill out all fields and upload your resume.");
    } else {
        alert("Application Submitted Successfully!");
        // Here you would typically send the form data to the server
        // For demonstration purposes, we'll just reset the form
        document.getElementById("applicationForm").reset();
    }
});

// Toggle navigation menu for mobile view
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
