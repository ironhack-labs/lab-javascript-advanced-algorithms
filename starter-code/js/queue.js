
$(document).ready(function() {
  queue = new StackDataStructure()
  $cont = $('section.queue div.cont')  
  queue.MAX_SIZE = $cont.length

  $('section.queue button.green').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(queue.canPush()) {
      queue.push($($cont).text())
      $($parent).children('div.cont:first').prop('class', 'block')
    }    
  })

  $('section.queue button.red').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(!queue.isEmpty()){
      queue.pop($($cont).text())
      $($parent).children('div.block:last').prop('class', 'cont')
    }
  })
})