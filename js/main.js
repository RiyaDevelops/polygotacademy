// Javascript 
// # Test
// console.log("testing testing!");

//Scroll Reveal
document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.course-cards__wrapper div', {
      delay: 200,        // Delay before the animation starts
      interval: 200,     // Interval between animations of each element
      duration: 1000,    // Duration of the animation
      reset: false       // Animation only happens once
  });
});



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

// Scroll to Top Button 
// function scrollToBottom() {
//     window.scrollTo({  //scrollTo method used in js 
//         bottom: 0,
//         behavior: 'smooth'
//     });
// }
// function scrollToBottom() {
//   window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//   });
//   document.querySelector('.go-to-bottom').style.visibility = 'hidden';  // Hide the button
// }

// window.addEventListener('scroll', function() {
//   if (window.scrollY === 0) {
//       document.querySelector('.go-to-bottom').style.visibility = 'visible';  // Show the button when at the top
//   }
// });

// // Initial check to display button if needed
// if (window.scrollY === 0) {
//   document.querySelector('.go-to-bottom').style.visibility = 'visible';
// } else {
//   document.querySelector('.go-to-bottom').style.visibility = 'hidden';
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




