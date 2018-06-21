$(document).ready(function(){
    var stack = new StackDataStructure()
  
    $('#stack').click(stackElement)
    $('#unstack').click(unstackElement)
  
  
    //Add to stack
    function stackElement() {
      var element = $('#stackInput').val()
      if (element != "") {
        printStack(stack.push(element))
        $('#stack').val('')
      }
    }
  
  
    //Button clicked
    function unstackElement() {
      var a = stack.pop()
      if (a != 'Stack Underflow') {
        printStack(stack.stackControl)
      }
      printStack(a)
    }
  
  
    //Print the stack
    function printStack(arg) {
      if (arg == 'Stack Overflow') {
        $('#stack').append('<div class="error">' + arg + '</div>')
      } else if (arg == 'Stack Underflow'){
        stackDivs += '<div class="error">' + arg + '</div>'
      } else {
        var index = 0
        for (;index < stack.stackControl.length; index++) {
        }
        for (; index < stack.MAX_SIZE; index++) {
          
        }
        $('#stack').html(stackDivs)
      }
    }
  
  })
  