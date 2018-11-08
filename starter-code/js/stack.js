
var botonpushStack = $('#btn-pushS')
var botonpopStack = $('#btn-popS')

var stack = new StackDataStructure ()

botonpushStack.on('click',function(){
// $("#itemS").val()

  stack.push($("#itemS").val())

          $('.s:nth-child(8)').text(stack.stack[0])
          $('.s:nth-child(7)').text(stack.stack[1])
          $('.s:nth-child(6)').text(stack.stack[2])
          $('.s:nth-child(5)').text(stack.stack[3])
          $('.s:nth-child(4)').text(stack.stack[4])
          $('.s:nth-child(3)').text(stack.stack[5])
          $('.s:nth-child(2)').text(stack.stack[6])
          $('.s:nth-child(1)').text(stack.stack[7])

})


botonpopStack.on('click',function(){


  $('.s').splice(7 - stack.pop($("#itemS").val()),1,' ')
  
  



})
