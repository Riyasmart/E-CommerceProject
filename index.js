$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  // Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');
    const menuItems = document.querySelector('.menu-items');

    // Toggle menu visibility when checkbox is checked
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menuItems.style.display = 'flex';
        } else {
            menuItems.style.display = 'none';
        }
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!menuItems.contains(event.target) && !checkbox.contains(event.target)) {
            menuItems.style.display = 'none';
            checkbox.checked = false;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
