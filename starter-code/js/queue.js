$(document).ready(function() {

  $(".queue").removeClass("blue");

  $(".queue-btn .btn-add").click(function() {
    $(".queue .blue").toggle();
  });

});
