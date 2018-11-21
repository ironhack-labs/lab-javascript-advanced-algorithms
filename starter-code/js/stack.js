var stack = new StackDataStructure();


$(document).ready(function(){

  $('#addbutton').click(addStack);
  $('#takebutton').click(removeStack);

  function addStack () {
      var newElement = $("#stackinput").val() || "Element";
      stack.stackControl.push(newElement);
      if (stack.stackControl.length <= stack.MAX_SIZE) {
        drawStack();
      } else {
        alert("Stack overflow!")
      }
    }

    function drawStack () {
      var stackList = $("#stack");
      console.log(stack.stackControl);
      stackList.html('')

      for (var i=0; i < stack.MAX_SIZE; i++) {
        var content = stack.stackControl[i] || "";
        var cssClass = content ? 'stackElement' : 'stackEmpty'
        $('#stack').prepend(`<li class="rounded ${cssClass}">${content}</li>`)
        $('li.stackEmpty:last-of-type').remove();
        }
      }
    function removeStack () {
    if (stack.stackControl.length > 0) {
      stack.pop();
      $('.stackElement').first().remove();
      $('#stack').prepend(`<li class="rounded stackEmpty"></li>`)
    } else {
      alert("Stack Underflow!!")
    }
    }
})
