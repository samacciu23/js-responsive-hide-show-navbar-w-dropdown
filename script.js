// Responsive Navbar (https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Hide Navbar on Scroll (https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {                 
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myTopnav").style.top = "0";
    } else {
        document.getElementById("myTopnav").style.top = "-50px";
    }
        prevScrollpos = currentScrollPos;
}

