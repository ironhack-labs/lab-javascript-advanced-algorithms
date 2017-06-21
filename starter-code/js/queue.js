$( document ).ready(function() {
  $('.right .button-add').click(function(){
  $('.cajar:first').addClass('color-azul');
  $('.cajar:first').removeClass('cajar');
  });

  $('.right .button-take').click(function(){
  $('.color-azul:last').addClass('cajar');
  $('.color-azul:last').removeClass('color-azul');
  });

});
