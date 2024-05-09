// hamburger variable menu




// Back to Top Button 
function scrollToBottom() {
    window.scrollTo({  //scrollTo method used in js 
        bottom: 0,
        behavior: 'smooth'
    });
}

var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    var goBottomButton = document.querySelector('.go-to-bottom');

    if (prevScrollpos > currentScrollPos) {
        goBottomButton.style.display = "inline-flex";
    } else {
        goBottomButton.style.display = "none";
    }
    prevScrollpos = currentScrollPos;
});


// Back to Top Button 
function scrollToTop() {
    window.scrollTo({  //scrollTo method used in js 
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', myHeight)
 function myHeight(){
    var goTopButton= document.querySelector('.back-to-top'); //selecting the class
    var windowHeight = window.innerHeight; //window.innerHeight represents the height of the viewport (the visible area of the browser window).
    var documentHeight = document.documentElement.scrollHeight; // Total height of the document

    if(window.scrollY +  windowHeight >= documentHeight){ //When the sum is greater than or equal to the document height, it means the user has scrolled to the bottom of the page.
        goTopButton.style.display = "inline-flex"
    } else{
        goTopButton.style.display = "none"
    }
 }
