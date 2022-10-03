// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("wh-show") == -1) {
      x.className += " wh-show";
      x.previousElementSibling.className += " wh-theme-d1";
    } else { 
      x.className = x.className.replace("wh-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" wh-theme-d1", "");
    }
  }
  
  // Used to toggle the menu on smaller screens when clicking on the menu button
  function openNav() {
    var x = document.getElementById("navBar");
    if (x.className.indexOf("wh-show") == -1) {
      x.className += " wh-show";
    } else { 
      x.className = x.className.replace(" wh-show", "");
    }
  }
 
  var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,12000);

function nextSlide(){
    slides[currentSlide].className = 'slide';SVGAnimatedLengthList
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
  