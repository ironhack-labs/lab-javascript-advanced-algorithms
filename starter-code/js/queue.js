// document.getElementById('btn-mode').onclick = function() {
//   const mode = document.getElementById('btn-mode').innerHTML;
//   console.log('queue clicked')

// if (mode !== "Switch to Queues") {

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
    addItem()
    input.val('')
  });
  $('#take').click(() => {
    newQueue.dequeue()
    takeItem()
    input.val('')
  });

  const addItem = () => {
    newQueue.arr.map((text, index) => {
      var selector = '#' + (index + 1);
      $(selector).addClass('active-item')
      $(selector).text(text)
    })
    checkStack()
  }
  const takeItem = () => {
    var removedId = newQueue.arr.length + 1;
    var selector = '#' + removedId;
    $(selector).removeClass('active-item')
    $(selector).text('')
    checkStack()
    
    newQueue.arr.map((text, index) => {
      var selector = '#' + (index + 1);
      $(selector).addClass('active-item')
      $(selector).text(text)
    })
  }

})


// }



// }
