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
  function getSliderSettings() {
    const windowWidth = $(window).width();
    let settings = {
      slideWidth: 371,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      pager: false,
      infiniteLoop: true,
      controls: false,
      slideMargin: 40,
      onSlideAfter: function($slideElement, oldIndex, newIndex) {
          $('.bxslider li').removeClass('active-slide');
          $slideElement.addClass('active-slide');
      }
    };

    if(windowWidth < 600) {
      settings.slideWidth = windowWidth - (settings.slideMargin * 2);
      settings.minSlides = 1;
      settings.maxSlides = 1;
    } else if(windowWidth < 1100) { 
      settings.minSlides = 2;
      settings.maxSlides = 2;
      settings.slideWidth = (windowWidth / 2) - (settings.slideMargin * 2);
    }

    return settings;
  }
  
  let slider = $('.bxslider').bxSlider(getSliderSettings());
  
  // Update slider settings on window resize
  $(window).resize(function() {
    slider.reloadSlider(getSliderSettings());
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



// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 25.365973, lng: 55.365674 }, // coordinates for United Arab Emirates
//     zoom: 6,
//   });
// }

// // Load the API
// const script = document.createElement("script");
// script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDHDnaSXRXooWRY7xzniEnf364ptm4p_Is&callback=initMap`;
// document.getElementsByTagName("head")[0].appendChild(script);