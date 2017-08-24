
$(document).ready(function() {
  queue = new QueueDataStructure()
  $cont = $('section.queue div.cont')  
  queue.MAX_SIZE = $cont.length

  $('section.queue button.green').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(queue.canEnqueue()) {
      $div = $($cont)[queue.queueControl.length]
      queue.enqueue($($cont).text())
      $($div).prop('class', 'block')
      // También funciona pero sin utilizar queueControl[]
      // $($parent).children('div.cont:first').prop('class', 'block')
    }    
  })

  $('section.queue button.red').on('click', function() {
    $parent = $(this).parent()
    $cont = $($parent).children('div')
    if(!queue.isEmpty()){
      queue.dequeue($($cont).text())
      $div = $($cont)[queue.queueControl.length]
      $($div).prop('class', 'cont')
      // $($parent).children('div.block:last').prop('class', 'cont')
    }
  })
})