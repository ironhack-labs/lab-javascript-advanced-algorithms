$(document).ready(function() {
  //  NO FUNCIONA REVISAR
  /*  var queue;
    queue = new QueueDataStructure();
    $('.c-right-button .btn.add').click(function() {
      queue.isEmpty();
      queue.canEnqueue();
      queue.enqueue(0);*/


  $('.c-right-button .btn-add').click(function() {
    $('.right:first').addClass('azul-R');
    $('.right:first').removeClass('right');

  });
  $('.c-right-button .btn-take').click(function() {

    $('.azul-R:last').addClass('right');
    $('.azul-R:last').removeClass('azul-R');

  });

});
