// hamburger variable, hamburger variable selects css element with class name menu
// JavaScript code creates an event listener for the click event on the hamburger menu icon and toggles the "navbar-open" class on the mobile menu
// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.querySelector(".mobile-navbar-menu");
//     const mobileMenu = document.querySelector(".mobile");
//     const hamburgerIcon = document.querySelector(".mobile-navbar-menu i");
//     const navLinks = document.querySelectorAll(".nav__link");

//     // Toggle mobile menu and hamburger icon
//     hamburger.addEventListener('click', () => {
//         mobileMenu.classList.toggle("navbar-open");

//         // Toggle the hamburger icon between bars and x
//         if (mobileMenu.classList.contains("navbar-open")) {
//             hamburgerIcon.classList.remove("fa-bars");
//             hamburgerIcon.classList.add("fa-times");
//         } else {
//             hamburgerIcon.classList.remove("fa-times");
//             hamburgerIcon.classList.add("fa-bars");
//         }
//     });

//     // Close mobile menu when a navigation link is clicked
//     navLinks.forEach(link => {
//         link.addEventListener("click", () => {
//             mobileMenu.classList.remove("navbar-open");
//             hamburgerIcon.classList.remove("fa-times");
//             hamburgerIcon.classList.add("fa-bars");
//         });
//     });
// });



