$("#switchlang").on("click", function() {
  if ($("#switchlang").is(":checked")) {
    $(".box-en").addClass("active");
    $(".box-th").removeClass("active");
  } else {
    $(".box-en").removeClass("active");
    $(".box-th").addClass("active");
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
  }else{
    header.removeClass("hide-header");
  }
});
