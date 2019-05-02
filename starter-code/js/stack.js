document.addEventListener("DOMContentLoaded", function (event) {

  const stack = new StackDataStructure()
  const textInput = document.getElementById('input')

  const buttonAdd = document.getElementById('add')
  const buttonTake = document.getElementById('take')


  // Creacion Stack Container
  introduceDiv(stack.MAX_SIZE)


  // Captura los elementos con clase row
  const elementsCelda = document.getElementsByClassName('row')


  // let currentElementPos = stack.MAX_SIZE - 1
  let currentElementPos = elementsCelda.length - 1





  // Evento Add

  buttonAdd.onclick = () => {

    const elementPushed = stack.push(textInput.value)
    if (elementPushed === 'Stack Overflow') {
      alert(elementPushed)
      return
    }

    elementsCelda[currentElementPos].innerHTML = textInput.value
    elementsCelda[currentElementPos].className = 'row elementStack'

    currentElementPos--
  }


  // Evento Take

  const currentStackPosition = 0

  buttonTake.onclick = () => {

    const elementsStack = document.getElementsByClassName('elementStack')

    const elementTaked = stack.pop()
    if (elementTaked === 'Stack Underflow') {
      alert(elementTaked)
      return
    }

    elementsCelda[currentElementPos + 1].innerHTML = ''
    elementsCelda[currentElementPos + 1].className = 'row celda'

    currentElementPos++

  }

})



function introduceDiv(numeroDivs) {
  const divContainer = document.getElementById('container')

  for (let i = 0; i < numeroDivs; i++) {
    let html = document.createElement('div')
    html.setAttribute('class', 'row celda')
    divContainer.appendChild(html)
  }


}