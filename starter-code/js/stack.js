$(document).ready(function() {

  $(".stack").removeClass("blue");

  $(".stack-btn .btn-add").click(function() {
    $(".stack .blue").toggle();
  });

});
