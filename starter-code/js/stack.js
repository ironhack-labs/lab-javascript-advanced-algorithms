
$(document).ready(function(){

  $('.btn-add').on("click", function(){
    $('.vertical:last').prop('class', 'color-1');
  });

  $('.btn-take').on("click", function(){
    $('.color-1:first').removeClass('color-1');
  });

  $('.btn-add-2').on("click", function(){
    $('.horizontal:first').addClass('color-2');
  });

  // $('.btn-add-2').on("click", function(){
  //   $('.horizontal:first').prop.('color-2');
  // });

});
