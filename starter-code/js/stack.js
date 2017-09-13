$(document).ready( function () {
  var stack = new StackDataStructure()
  stack.MAX_SIZE = 10 //by default in our case

  // =========================
  //    Adding to the Stack
  // =========================
  $('#stack-add').click( function (event) {
    event.preventDefault()
    var item = $('#stack-input').val() // Getting the item
    stack.push(item)  // Adding it to the stack

    var row = stack.MAX_SIZE - stack.stackControl.length + 1
    $('.stack div:nth-child(' + row + ')').text(item)
  })

  // =============================
  //    Removing from the Stack
  // =============================
  $('#stack-take').click( function (event) {
    event.preventDefault()
    stack.pop()

    var row = stack.MAX_SIZE - stack.stackControl.length
    $('.stack div:nth-child(' + row + ')').text('')
  })
})
