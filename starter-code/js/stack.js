$(document).ready(function() {
  const newArr = []
  const newStack = new StackDataStructure(newArr, 4)
  console.log(newStack)
  const numOfDiv = newStack.maxNum;
  let hasWarning = false;

  let html = ''
  for (let i = numOfDiv; i > 0; i--) {
    html += `<div class='stack-item' id='${i}'>
    </div>`
  }

  const input = $('input')
  document.querySelector('.bottom-container').innerHTML = html

  const checkStack = () => {
    console.log('checkedStack')
    console.log(newStack.arr)
    if(newStack.arr.length === 0 && !hasWarning) {
      hasWarning = true
      console.log('empty')
      $('.bottom-container').append(`<div class='stack-item warning-item'>Stack Underflow</div>`)
    } else if (newStack.arr.length === numOfDiv && !hasWarning){
      hasWarning = true
      const lastId = '#' + numOfDiv;
      console.log(lastId)
      $(`<div class='stack-item warning-item'>Stack Overflow</div>`).prependTo('.bottom-container')
    } else if (0 < newStack.arr.length && newStack.arr.length < numOfDiv){
      hasWarning = false;
      $('.warning-item').remove()
    } else {
      return
    }
  }
  checkStack()

  $('#add').click(() => {
    // console.log('add btn clicked')
    const inputValue = input.val()
    newStack.push(inputValue)
    // console.log(newStack.arr)
    addItem()
    input.val('')
  });
  $('#take').click(() => {
    console.log('take btn clicked')
    const inputValue = input.val()
    newStack.pop()
    console.log(newStack.arr)
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
