// document.getElementById('btn-mode').onclick = function() {
//   const mode = document.getElementById('btn-mode').innerHTML;
//   console.log('stack clicked')

//   if (mode === "Switch to Stacks") {

  $(document).ready(function() {
    const newStack = new StackDataStructure([], 4)
    console.log('stack!!!!!!!')
    console.log(newStack)

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
      addItem()
      input.val('')
    });
    $('#take').click(() => {
      newStack.pop()
      takeItem()
      input.val('')
    });

    const addItem = () => {
      newStack.arr.map((text, index) => {
        var selector = '#' + (index + 1);
        $(selector).addClass('active-item')
        $(selector).text(text)
      })
      checkStack()
    }
    const takeItem = () => {
      var removedId = newStack.arr.length + 1;
      var selector = '#' + removedId;
      $(selector).removeClass('active-item')
      $(selector).text('')
      checkStack()
    }

  })

//   }

// }





