$("#switchlang").on("click", function() {
  if ($("#switchlang").is(":checked")) {
    $('.box-en').addClass('active');
    $('.box-th').removeClass('active');
  } else {
    $('.box-en').removeClass('active');
    $('.box-th').addClass('active');
  }
});
