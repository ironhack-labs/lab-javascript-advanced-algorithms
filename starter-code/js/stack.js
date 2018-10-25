$( document ).ready(function() {
  var stack = new StackDataStructure();

   $('.s-overflow').hide();

   $('.btn-danger').click(function() {
    if ($(input).val() != "") {
      let elem = $(input).val();
      stack.push(elem);
      $(input).val("");
      render();
    }
  });
