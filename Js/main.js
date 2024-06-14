// Navbar active section 
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove active class from all links and add to the clicked one
    function setActiveLink(event) {
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Attach event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });
});

// Toggle Menu icon for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navigation = document.querySelector(".navigation");
  
    menuIcon.addEventListener("click", toggleNavElements);
  
    function toggleNavElements() {
      navigation.classList.toggle("active");
    }
  });
