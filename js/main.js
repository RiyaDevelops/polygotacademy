// Javascript 
// # Test
// console.log("testing testing!");

//Scroll Reveal
// ScrollReveal().reveal('.course-card',{ delay: 200 }); 
// ScrollReveal().reveal('.student-feedback',{ delay: 300 }); 

// -------------------MOBILE NAVBAR SECTION----------------------------

// The toggleMenu function is going to add or remove the 
// nav--open class from the mobile-menu (from non-visible to visible)
function toggleMenu() {
  // The element with the ID mobile-menu will be  assigned to the variable  mobileMenu
  const mobileMenu = document.getElementById("mobile-menu");

  // The element with the class .hamburger-menu assigned teh varibale hamburgerMenu
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  //this will toggle the active class on the hamburger menu
  // If the class is not present, it adds it; if it is present, it removes it.
  hamburgerMenu.classList.toggle("active");

  // This will toggle the nav--open class on the mobile menu
  mobileMenu.classList.toggle("nav--open");
}


// -------------------MOBILE NAVBAR SECTION----------------------------



// -------------------FAQS SECTION----------------------------
// FREQUENTLY ASKED QUESTIONS - ACCORDIAN 
      
var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }



// -------------------FAQS SECTION----------------------------



//       // JavaScript code creates an event listener for the click event on the hamburger menu icon and toggles the "navbar-open" class on the mobile menu
// document.addEventListener('DOMContentLoaded', function () {
//   const hamburger = document.querySelector(".menu");
//   const mobileMenu = document.querySelector(".mobile");
//   const hamburgerIcon = document.querySelector(".menu i");
//   const navLinks = document.querySelectorAll(".navbar__link");

//   // Toggle mobile menu and hamburger icon
//   hamburger.addEventListener('click', () => {
//       mobileMenu.classList.toggle("navbar-open");

//       // Toggle the hamburger icon between bars and x
//       if (mobileMenu.classList.contains("navbar-open")) {
//           hamburgerIcon.classList.remove("fa-bars");
//           hamburgerIcon.classList.add("fa-times");
//       } else {
//           hamburgerIcon.classList.remove("fa-times");
//           hamburgerIcon.classList.add("fa-bars");
//       }
//   });

//   // Close mobile menu when a navigation link is clicked ninside mobile menu
//   navLinks.forEach(link => {
//       link.addEventListener("click", () => {
//           mobileMenu.classList.remove("navbar-open");
//           hamburgerIcon.classList.remove("fa-times");
//           hamburgerIcon.classList.add("fa-bars");
//           window.scrollTo({ top: offsetTop, behavior: "smooth" }); // Smooth scroll behavior
//       });
//   });
// });



// <!-- scroll to bottom floating icon -->
//         <a href="#courses" class="go-to-bottom" onclick="scrollToBottom()" >
//           <i class="fa-solid fa-angle-down"></i>
//           </a>
//           <!-- scroll to bottom floating icon -->

//           <!-- <div class="back-to-top"> -->
//         <a href="" class="back-to-top" onclick="scrollToTop()">
//           <i class="fa-solid fa-angle-up"></i>
//           </a>
//         <!-- </div> -->

// Back to Top Button 
// function scrollToBottom() {
//     window.scrollTo({  //scrollTo method used in js 
//         bottom: 0,
//         behavior: 'smooth'
//     });
// }

// var prevScrollpos = window.pageYOffset;

// window.addEventListener('scroll', function() {
//     var currentScrollPos = window.pageYOffset;
//     var goBottomButton = document.querySelector('.go-to-bottom');

//     if (prevScrollpos > currentScrollPos) {
//         goBottomButton.style.display = "inline-flex";
//     } else {
//         goBottomButton.style.display = "none";
//     }
//     prevScrollpos = currentScrollPos;
// });


// Back to Top Button 
// function scrollToTop() {
//     window.scrollTo({  //scrollTo method used in js 
//         top: 0,
//         behavior: 'smooth'
//     });
// }

// window.addEventListener('scroll', myHeight)
//  function myHeight(){
//     var goTopButton= document.querySelector('.back-to-top'); //selecting the class
//     var windowHeight = window.innerHeight; //window.innerHeight represents the height of the viewport (the visible area of the browser window).
//     var documentHeight = document.documentElement.scrollHeight; // Total height of the document

//     if(window.scrollY +  windowHeight >= documentHeight){ //When the sum is greater than or equal to the document height, it means the user has scrolled to the bottom of the page.
//         goTopButton.style.display = "inline-flex"
//     } else{
//         goTopButton.style.display = "none"
//     }
//  }
