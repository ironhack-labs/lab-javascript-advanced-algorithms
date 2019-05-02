// CREATE DIVS
const stack = new StackDataStructure
let stackContainer = document.getElementById('stack')
console.log(stackContainer)
console.log(stack.MAX_SIZE)

for (let i= 0; i <  stack.MAX_SIZE; i++){
  let div = document.createElement('div')
  div.setAttribute('class', 'stackBox')
  stackContainer.appendChild(div)
}

// LOGICA DE ADD

let addBtn = document.getElementById("newStack")
let newElm = document.getElementById("stackInput")
let stackBoxes = document.getElementsByClassName("stackBox")
let currentDiv = 10

addBtn.onclick = () => {
  stack.push(newElm.value)
  let currentStackBox = stackBoxes[currentDiv]
  currentStackBox.innerHTML = newElm.value
  currentStackBox.setAttribute("class", "stackBox fill")
  console.log(stack.stackControl)
}

let takeBtn = document.getElementById("deleteStack")

takeBtn.onclick = () => {
  let currentStackBox = stackBoxes[currentDiv]
  currentStackBox.setAttribute("class", "stackBox")
  currentStackBox.innerHTML = ""
  stack.pop()
  console.log(stack.stackControl)
}

