

// console.log("JavaScript file loaded successfully!");

// Hamburger Responsive Navbar

// JavaScript event listener
// document.addEventListener('DOMContentLoaded', function () {
    // declare variable called hamburger, we are targeting the .fa-bars, 
    //class name = .menu
    // const hamburger = document.querySelector(".menu");
    // declare a variable to target the navbar , navbar has a class of navbar
   // Target the menu icon

// // Add event listener to the menu icon
// hamburger.addEventListener('click', () => {
//     // Toggle the 'toggle' class on the menu icon
//     hamburger.classList.toggle("toggle");
    
//     // Log a message to the console to test if the menu icon is being clicked
//     console.log("Menu icon clicked!");
// });



// const hamburger = document.querySelector(".menu");
// const navbar = document.querySelector(".navbar");

// // Add event listener to the menu icon
// hamburger.addEventListener('click', () => {
//     console.log("Menu icon clicked!"); // Check if the event listener is triggered

//     hamburger.classList.toggle("toggle");
    
//     // Toggle the 'navbar-open' class on the navbar
//     navbar.classList.toggle("navbar-open");
// });


// const dropdown = document.querySelector('.dropdown');
//     dropdown.forEach(dropdown => {
        
//         const button = dropdown.querySelector('.drop-btn');
//         const caret = dropdown.querySelector('.fa-caret-down');
//     });



// FREQUENTLY ASKED QUESTIONS - ACCORDIAN 

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }



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


// // Back to Top Button 
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
