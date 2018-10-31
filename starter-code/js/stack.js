
$(document).ready(function () {

  var stack = new StackDataStructure();

  $('.addS').click(function (e) {
    if ($('.inputS').val() === "") {
      alert('Insert a number')
    } else {
      var valor = $('.inputS').val(); 
      if (stack.push(valor) === 'Stack Overflow') alert('Stack Overflow');
      rellenarPila();
      refreshInput()
    }
  });

  $('.takeS').click(function () {
    if (stack.pop() === 'Stack Underflow') alert('Stack Underflow');
    rellenarPila();
    refreshInput()
  });

  function rellenarPila() {
    $(`.stack`).text("");
    stack.stackControl.forEach(function (element, index) {
      $(`.stack.${index}`).text(stack.stackControl[index]);
    });
  }

  function refreshInput() {
    $('.inputS').val('');
  }
});