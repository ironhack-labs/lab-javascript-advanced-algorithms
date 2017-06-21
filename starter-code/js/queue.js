$(document).ready(function() {
  $('.c-right-button .btn-add').click(function() {
    //alert("yesssssss");
    $('.right:first').addClass('azul-R');
    $('.right:first').removeClass('right');

  });
  $('.c-right-button .btn-take').click(function() {
    //alert('yes is good');
    $('.azul-R:last').addClass('right');
    $('.azul-R:last').removeClass('azul-R');


  });

});
