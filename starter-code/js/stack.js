$( document ).ready(function() {
  $('.left .button-add').click(function(){
  $('.cajal:last').addClass('color-azul');
  $('.cajal:last').removeClass('cajal');
  });

  $('.left .button-take').click(function(){
  $('.color-azul:first').addClass('cajal');
  $('.color-azul:first').removeClass('color-azul');
  });

});
