$(document).ready(function(){
    var stack = new StackDataStructure();
  $("#add-stack").click(function(){
    if(stack.push() !== 'Stack Overflow'){
      console.log(stack.stackControl);
    //  $(".stack:last-child").not('.azul').addClass('azul');
    var a= $(".stack").last().children().not('.unselect').addClass('azul');
    a.prev().removeClass('unselect');
  }else {
    alert('Stack Overflow! Debes vaciar el stack antes!');
  }

  });

  $("#take-stack").click(function(){
    if(stack.pop() !== 'Stack Underflow'){
      $(".stack").children('.azul').first().removeClass('azul');

  }else {
    alert('No quedan stacks! Añade más antes de borrar');
  }

  });

});
