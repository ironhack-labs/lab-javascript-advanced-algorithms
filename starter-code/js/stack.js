$(document).ready(function() {
    const newStack = new StackDataStructure([], 4)
    console.log('stack!!!!!!!')

    let html = ''
    for (let i = newStack.maxNum; i > 0; i--) {
      html += `<div class='stack-item' id='${i}'>
      </div>`
    }

    const input = $('input')
    document.querySelector('.stack-container').innerHTML = html

    const checkStack = () => {
      if(newStack.checkIfEmpty()) {
        $('#underflow').removeClass('inactive').addClass('active')
      } else if (newStack.checkIfFull()){
        $('#overflow').removeClass('inactive').addClass('active')
      } else {
        $('#overflow').removeClass('active').addClass('inactive')
        $('#underflow').removeClass('active').addClass('inactive')
      } 
    }
    checkStack()

    $('#add').click(() => {
      const inputValue = input.val()
      newStack.push(inputValue)
      rerender()
    });
    $('#take').click(() => {
      newStack.pop()
      rerender()
    });

    const rerender = () => {
      var clearTop = '#' + (newStack.arr.length + 1);
      $(clearTop).removeClass('active-item').text('')

      newStack.arr.map((text, index) => {
        var selector = '#' + (index + 1);
        $(selector).addClass('active-item').text(text)
      })
      checkStack()
      input.val('')
    }
  })






