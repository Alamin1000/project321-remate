(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});


// slider Scrolling
sliderScrolling(document.querySelectorAll(".section-slider"), 1, 1);
function sliderScrolling(sliderSection, showItem, space) {
  sliderSection.forEach((section) => {
    let wrapper = section.querySelector(".slider-wrapper");
    let slides = wrapper.querySelectorAll(".slider-item");
    let track = wrapper.querySelector(".slider-track");
    vertical();
    function vertical() {  
      wrapper.style.height = window.innerHeight + "px";
      
      let itemHeight = wrapper.clientHeight / showItem;
      let fullheight = itemHeight * slides.length;
      track.style.height = fullheight + "px";

      slides.forEach((slide) => {
        slide.style.height = itemHeight + "px";
      });

      gsap.to(track, {
        y: -fullheight + itemHeight * showItem,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: fullheight * space,
          pin: section,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (slides.length - showItem),
            duration: 0.5,
            delay: 0,
            ease: "none",
          },
        },
      });
    }
  });
}