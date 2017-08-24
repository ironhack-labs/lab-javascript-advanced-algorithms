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
      $n = stack.MAX_SIZE - stack.stackControl.length
      $div = $($cont)[$n]
      $($div).prop('class', 'block').text($product)
      // también funciona pero no utilizamos el stackControl[]
      // $($parent).children('div.cont:last').prop('class', 'block').text($product)
    }    
  })

  $('section.stack button.red').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(!stack.isEmpty()){
      stack.pop($($cont).text())
      $n = (stack.MAX_SIZE - 1) - stack.stackControl.length
      $div = $($cont)[$n]
      $($div).prop('class', 'cont').text('')
      // $($parent).children('div.block:first').prop('class', 'cont').text('')
    }
  })
})