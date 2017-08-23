$(document).ready(function() {
  stack = new StackDataStructure()
  $cont = $('section.stack div.cont')  
  stack.MAX_SIZE = $cont.length

  $('section.stack button.green').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    $product = $($parent).children('input').val()
    if(stack.canPush()) {
      stack.push($($cont).text())
      $($parent).children('div.cont:last').prop('class', 'block').text($product)
    }    
  })

  $('section.stack button.red').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(!stack.isEmpty()){
      stack.pop($($cont).text())
      $($parent).children('div.block:first').prop('class', 'cont').text('')
    }
  })
})