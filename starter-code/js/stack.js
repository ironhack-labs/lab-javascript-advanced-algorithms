var stack;

$(document).ready(function(){

  stack = new StackDataStructure()

  $('#add-stack-btn').on('click', function(){
    var inputText = $('#stack-input-text').val()

    var pushResult = stack.push(inputText)

    drawStackAfterPush(pushResult)
  })

  $('#remove-stack-btn').on('click', function(){
    var popResult = stack.pop()

    drawStackAfterPop(popResult)
  })
})

function drawStackAfterPush(pushResult){
  pushResult == 'Stack Overflow' ? drawStackOutOfBounds('first', 'Overflow') : drawNormalStack()
}

function drawStackAfterPop(popResult){
  popResult == 'Stack Underflow' ? drawStackOutOfBounds('last', 'Underflow') : drawNormalStack()
}

function drawStackOutOfBounds(child, overUnderFlow){
  var $stackOutOfBoundsDiv = $('.stack-container div:' + child + '-child()')
  $stackOutOfBoundsDiv.addClass('out-of-bounds')
  $stackOutOfBoundsDiv.text('Stack ' + overUnderFlow)
}

function drawNormalStack(){
  removeStyles()

  var numElements = stack.stackControl.length
  var childrenNum = stack.MAX_SIZE + 1
  var indexStack = 0;
  var $element

  if(numElements == 0){
    $element = $('.stack-container div:nth-child(' + childrenNum + ')')
    $element.removeClass('full')
    $element.text('')
  }

  while(numElements>0){
    $element = $('.stack-container div:nth-child(' + childrenNum + ')')
    $element.addClass('full')
    $element.text(stack.stackControl[indexStack])

    indexStack++
    childrenNum--
    numElements--
  }
}

function removeStyles(){
  var $stackOverflowDiv = $('.stack-container div:first-child()')
  $stackOverflowDiv.removeClass('out-of-bounds')
  $stackOverflowDiv.text('')

  var $stackUnderflowDiv = $('.stack-container div:last-child()')
  $stackUnderflowDiv.removeClass('out-of-bounds')
  $stackUnderflowDiv.text('')

  var $fullElements = $('.stack-container').children('.full')
  for(var i = 0; i < $fullElements.length; i++){
    $($fullElements[i]).removeClass('full')
    $($fullElements[i]).text('')
  }
}
