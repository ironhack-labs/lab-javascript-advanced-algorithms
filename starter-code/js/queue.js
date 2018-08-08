$(document).ready(function() {
  const newQueue = new QueueDataStructure([], 4)
  console.log('queue!!!!!!!')

  let html = ''
  for (let i = newQueue.maxNum; i > 0; i--) {
    html += `<div class='stack-item' id='${i}'>
    </div>`
  }

  const input = $('input')
  document.querySelector('.stack-container').innerHTML = html

  const checkStack = () => {
    console.log(newQueue.arr)
    if(newQueue.checkIfEmpty()) {
      $('#underflow').removeClass('inactive').addClass('active')
    } else if (newQueue.checkIfFull()){
      $('#overflow').removeClass('inactive').addClass('active')
    } else {
      $('#overflow').removeClass('active').addClass('inactive')
      $('#underflow').removeClass('active').addClass('inactive')
    } 
  }
  checkStack()

  $('#add').click(() => {
    const inputValue = input.val()
    newQueue.enqueue(inputValue)
    rerender()
  });
  $('#take').click(() => {
    newQueue.dequeue()
    rerender()
  });

  const rerender = () => {
    var clearTop = '#' + (newQueue.arr.length + 1);
    $(clearTop).removeClass('active-item').text('')
    
    newQueue.arr.map((text, index) => {
      var selector = '#' + (index + 1);
      $(selector).addClass('active-item').text(text)
    })
    input.val('')
    checkStack()
  }
})
