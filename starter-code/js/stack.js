const addButton = document.getElementById('add-stack-item')
const takeButton = document.getElementById('take-stack-item')
const stackUl = document.getElementById('stack')
const stack = new StackDataStructure()
/* function createStack(max) {
  console.log('entro en createItem')
  const newNode = document.createElement('li');

  const stackUl = document.getElementById('stack')


  for (let i = 0; i < max; i++) {
    debugger;
    const newNode = document.createElement('li');
    newNode.className = 'list-group-item'; // set the CSS class
    stackUl.insertBefore(newNode, stackUl.children[0])
  }

} */


const createItem = stack => {
  //console.log('entro en createItem')
  const newNode = document.createElement('li');
  const newItem = document.getElementById('stack-item-text')

  //stack.push(newItem.value) === `Stack Overflow` ? newNode.innerText = `Stack Overflow` : newNode.innerText = newItem.value
  if (stack.push(newItem.value) === `Stack Overflow`) {
    newNode.innerText = `Stack Overflow`
    newNode.style.backgroundColor = 'red';
    newNode.style.color = 'white'
  } else {
    newNode.innerText = newItem.value
    newNode.style.backgroundColor = 'aliceblue'; // set the CSS class
    //console.log(stack.stackControl)
  }

  stackUl.insertBefore(newNode, stackUl.firstElementChild)
}

const takeItem = stack => {
  console.log('entro en takeItem')

  if (stack.pop() === `Stack Underflow`) {
    console.log('entro en if')
    const newNode = document.createElement('li');
    newNode.innerText = `Stack Underflow`
    newNode.style.backgroundColor = 'red';
    newNode.style.color = 'white'
    stackUl.insertBefore(newNode, stackUl.firstElementChild)
    // console.log(newNode)
    // console.log(stackUl)
  } else {
    stackUl.removeChild(stackUl.firstElementChild)
  }
  console.log(stack.stackControl)

}

window.onload = () => {

  //createStack(stack.MAX_SIZE)
}

addButton.onclick = (e) => {
  e.preventDefault();
  // if (stack.canPush())
  createItem(stack)
  // else {
  //   alert('Borra antes de añadir')
  // }
}
takeButton.onclick = (e) => {
  e.preventDefault();
  takeItem(stack)
}