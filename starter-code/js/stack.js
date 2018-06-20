
$(document).ready(function(){
  var stack = new StackDataStructure()

  var stackDivs = ''
  for (var i = 0; i < stack.MAX_SIZE; i++) {
    stackDivs += '<div></div>'
  }

  $('#stack').html(stackDivs)
  $('#stackElement').click(stackElement)
  $('#unstackElement').click(unstackElement)


  //Function called when add to stack button is clicked
  function stackElement() {
    var element = $('#stackInput').val()
    if (element != "") {
      printStack(stack.push(element))
      $('#stackInput').val('')
    }
  }


  //Function called when take from stack button is clicked
  function unstackElement() {
    var ret = stack.pop()
    if (ret != 'Stack Underflow') {
      printStack(stack.stackControl)
    }
    printStack(ret)
  }


  //Function that printe the stack
  function printStack(arg) {
    if (arg == 'Stack Overflow') {
      $('#stack').append('<div class="error">' + arg + '</div>')
    } else if (arg == 'Stack Underflow'){
      var stackDivs = ''
      stackDivs += '<div class="error">' + arg + '</div>'
      for (var i = 1; i < stack.MAX_SIZE; i++) {
        stackDivs += '<div></div>'
      }
      $('#stack').html(stackDivs)
    } else {
      var stackDivs = ''
      var index = 0
      for (;index < stack.stackControl.length; index++) {
        stackDivs += '<div class="active">' + stack.stackControl[index] + '</div>'
      }
      for (; index < stack.MAX_SIZE; index++) {
        stackDivs += '<div></div>'
      }
      $('#stack').html(stackDivs)
    }
  }

})
