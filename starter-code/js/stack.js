$('document').ready(function () {

  var stack1 = new StackDataStructure();

  $("#addBtn").on('click', function () {
    var input = $("input").val()
    if (input.length) {
      if (stack1.addElement(input) != "Overflow") {
        $('ul').prepend(`<li>${input}</li>`);
      } else if ($('li').html() === "OVERFLOW") {

      } else {
        $('ul').prepend(`<li>OVERFLOW</li>`);
        $('li:eq(0)').addClass('flow');
      }
    } else {}
  })

  $("#takeBtn").on('click', function () {
    if ($('ul li').length == 0) {
      $('ul').prepend(`<li>UNDERRFLOW</li>`);
      $('li:eq(0)').addClass('flow');
    } else {
      $('ul li:first-child').remove()
    };
  })

})