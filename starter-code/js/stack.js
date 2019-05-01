const addButton = document.getElementById('add-stack-item')
const takeButton = document.getElementById('take-stack-item')
const stackUl = document.getElementById('stack')

function createStack(max) {
  console.log('entro en createItem')
  const newNode = document.createElement('li');
  const newItem = document.getElementById('stack-item-text')
  const stackUl = document.getElementById('stack')


  for (let i = 0; i < max; i++) {
    debugger;
    newNode.className = 'list-group-item'; // set the CSS class
    stackUl.insertBefore(newNode, stackUl.children[0])
  }

}


function createItem() {
  console.log('entro en createItem')
  const newNode = document.createElement('li');
  const newItem = document.getElementById('stack-item-text')


  newNode.innerText = newItem.value
  newNode.style.backgroundColor = 'aliceblue'; // set the CSS class

  console.log(stackUl)

  stackUl.insertBefore(newNode, stackUl.children[0])
}

const takeItem = () => {
  console.log('entro en delete')

  const stackUl = document.getElementById('stack')
  console.log(stackUl.children[0])
  stackUl.removeChild(stackUl.children[0])
}

window.onload = () => {
  const stack = new StackDataStructure()
  createStack(stack.MAX_SIZE)
}

addButton.onclick = (e) => {
  e.preventDefault();
  createItem()

}
takeButton.onclick = (e) => {
  e.preventDefault();
  takeItem()
}