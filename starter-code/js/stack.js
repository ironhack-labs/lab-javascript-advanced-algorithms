function drawStackDataStructure (stack) {
  document.getElementById('stackBuffer').innerHTML = ''
  var stackNode = document.createElement('div')
  for(var i = stack.MAX_SIZE; i > 0; i--) {
    var element = document.createElement('div')

    element.id = i;
    element.className = stack.stackControl.length < i ? 'box' : 'box full'
    element.innerHTML = stack.stackControl.length < i ? '' :( (stack.MAX_SIZE - i === 0) ? 'Stack Overflow' : stack.stackControl[i-1])

    stackNode.append(element)
  }
  console.log('')

  document.getElementById('stackBuffer').append(stackNode)
}

function addElementToStack () {
  stack.push(document.getElementById('stackInput').value)
  drawStackDataStructure(stack)
  document.getElementById('stackInput').value = ''
  console.log(stack.stackControl)

}

function removeElementFromStack () {
  stack.pop(document.getElementById('stackInput').value)
  drawStackDataStructure(stack)
  document.getElementById('stackInput').value = ''
  console.log(stack.stackControl)

}
