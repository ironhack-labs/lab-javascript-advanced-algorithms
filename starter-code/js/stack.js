$(document).ready(function(){
  stack = new StackDataStructure();

  $('#add-btn').click(function () {
    //saco el valor accediendo a un input de tipo text y name = nombre
    var data = $('input:text[name=data-input]').val();
    console.log(data);
    
    if ( stack.canPush() ) {
      console.log('Max size: ' + stack.MAX_SIZE);
      var liFill = $('.stack-list:nth-child(2)').text(stack.push(data));
      liFill.addClass('new-data');
      console.log(liFill);
      console.log('Contenido: ' + stack.stackControl);
    }
    else {
      var liFill = $('.stack-list li:last').text('Stack Overflow');
      liFill.addClass('under-flow');
    }
  });

});