$(document).ready(function() {
    var stack = new StackDataStructure()
    var myStack, myItem
    $('#add-item').click(function() {
        myStack = $('#stack-items')
            //console.log(myStack[0].lastElementChild.hasClass('active'))
        console.log(stack.MAX_SIZE)
        console.log(stack.stackControl.length)
        myItem = stack.MAX_SIZE - stack.stackControl.length - 1
        console.log(myItem)
        console.log(document.getElementsByClassName('stack-item')[myItem].setAttribute('class', 'list-group-item list-group-item-warning stack-item active'))
        stack.stackControl.push("hola")
    })

})