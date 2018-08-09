$(document).ready(function () {

  var stack = new StackDataStructure(8)
  var divs = $("#stack section")


  $('#add').click(function () {

    var elem = $("#input").val()
    console.log(elem)
    if (!elem == "") {
      if (stack.add(elem)) {

        $("#input").val("")
        divs[8 - (stack.elements.length)].innerHTML = elem;
        console.log(divs[8 - (stack.elements.length)])
        var position = 8 - stack.elements.length+1
        console.log( $("#stack section:nth-child(" + position + ")"))
        $("#stack section:nth-child(" + position + ")").addClass("filled")
      }
    }

  });


  $('#take').click(function () {



      divs[8 - (stack.elements.length)].innerHTML = "";
      var position = 8 - stack.elements.length+1
      $("#stack section:nth-child(" + position + ")").removeClass("filled")
      stack.take()
    



  });











});