$(document).ready(function () {
  var stack = new StackDataStructure();
  // $('.input')

  $('.add').click(function (e) {

    if ($('.input').val() === "") {
      alert('Insert a number')
    } else {
      var valor = $('.input').val(); // toma el valor del input
      if (stack.push(valor) === 'Stack Overflow') alert('Stack Overflow');
      console.log(stack.stackControl);
      rellenarPila();
    }

  });


  $('.take').click(function () {

    if (stack.pop() === 'Stack Underflow') alert('Stack Underflow');
    console.log(stack.stackControl);
    rellenarPila();

  });

  function rellenarPila() {

    $(`.stack`).text("");


    stack.stackControl.forEach(function (element, index) {
      // debugger

      $(`.${index}`).text(stack.stackControl[index]);
    });

  }

});