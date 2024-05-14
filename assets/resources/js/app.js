// Add an event listener to the window that listens for the "scroll" event
window.addEventListener("scroll", (event) => {
  // Get the current vertical scroll position using window.scrollY
  const scroll = window.scrollY;

  // Select the header element using its "header" tag name
  const header = document.querySelector(".header");

  // Check if the scroll position is greater than 20 pixels
  if (scroll > 20) {
    // If the condition is true, add the "backDrop & animate__fadeInDownBig" class to the header element
    header.classList.add("backDrop", "animate__fadeInDownBig");
  } else {
    // If the condition is false, remove the "backDrop & animate__fadeInDownBig" class from the header element
    header.classList.remove("backDrop", "animate__fadeInDownBig");
  }
});

$(document).ready(function(){
  var slider = $('.bxslider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 371,
    moveSlides: 1,
    pager: false,
    infiniteLoop: true,
    controls: false,
    slideMargin: 40,
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
        // Remove the active class from all slides
        $('.bxslider li').removeClass('active-slide');
        // Add the active class to the current slide
        $slideElement.addClass('active-slide');
    }
  });
  
  // Custom prev/next button actions
  $('#slider-prev').on('click', function(){
    slider.goToPrevSlide();
    return false;
  });

  $('#slider-next').on('click', function(){
    slider.goToNextSlide();
    return false;
  });
  
  // Manually trigger the onSlideAfter callback for the initial load
  $('.bxslider li').eq(slider.getCurrentSlide()).addClass('active-slide');
});