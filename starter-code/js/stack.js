$(document).ready(function(){
    var stack = new StackDataStructure();

  $("#add-stack").click(function(){
    if(stack.push() !== 'Stack Overflow'){

    //  $(".stack:last-child").not('.azul').addClass('azul');
    var a= $(".stack").last().children().not('.unselect').addClass('azul');
    a.prev().removeClass('unselect');
  }else {
    alert('Stack Overflow! Debes vaciar el stack antes!');
  }

  });

  $("#take-stack").click(function(){
    if(stack.pop() !== 'Stack Underflow'){

    var a= $(".stack").children('.azul').first().removeClass('azul');
    a.prev().addClass('unselect');
  }else {
    alert('No quedan stacks! Añade más antes de borrar');
  }

  });
});
