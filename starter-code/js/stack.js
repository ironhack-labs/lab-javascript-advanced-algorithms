$(document).ready(function() {
  $('.c-left-button .btn-add').click(function() {
    //alert("yesssssss");
    $('.left:last').addClass('azul-L');
    $('.left:last').removeClass('left');

  });
  $('.c-left-button .btn-take').click(function() {
    //alert('yes is good');
    $('.azul-L:first').addClass('left');
    $('.azul-L:first').removeClass('azul-L');


  });


});
