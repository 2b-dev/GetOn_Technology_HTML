$("#switchlang").on("click", function() {
  if ($("#switchlang").is(":checked")) {
    $(".box-en").addClass("active");
    $(".box-th").removeClass("active");
  } else {
    $(".box-en").removeClass("active");
    $(".box-th").addClass("active");
  }
});
$(".owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      margin: 20,
      nav: false
    },
    600: {
      items: 4,
      margin: 30,
      nav: false
    },
    1200: {
      items: 7,
      margin: 40,
      nav: false,
      loop: true
    }
  }
});
var lastScrollTop = 0;
var fixheight = 180;
$(window).scroll(function() {
  var st = $(this).scrollTop();
  var header = $(".header-geton");
  if (st > fixheight) {
    setTimeout(function() {
      if (st > lastScrollTop) {
        header.addClass("hide-header");
      } else {
        header.removeClass("hide-header");
      }
      lastScrollTop = st;
    }, 100);
  } else {
    header.removeClass("hide-header");
  }
});
