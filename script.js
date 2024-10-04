let prevScrollPos = window.pageYOffset;
const header = document.getElementById("site-header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    // If scrolling down, hide the header
    if (prevScrollPos < currentScrollPos) {
        header.style.top = "-100px"; // Moves the header out of view
    } else {
        header.style.top = "0"; // Brings the header back when scrolling up
    }
    
    prevScrollPos = currentScrollPos; // Update the previous scroll position
};
