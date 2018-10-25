const stack = new StackDataStructure(10);

const addToStack = () => {

  let over = document.querySelector('#sts');
  if(stack.stack.length > stack.capacity){
    return over.innerText = 'Stack Overflow'
//   } else if(stack.stack.length <= 0){
//     return over.innerText = 'Stack Underflow'
  } else {
    let put = document.getElementsByTagName('input')[0].value;
    let el = document.createElement('div');
    el.innerText = put;
    el.setAttribute('class', 'stack');
    stack.addElement(el);
    let stackHTML = document.getElementById('stack');
  
    stack.stack.forEach(val => {
      stackHTML.appendChild(val);
    })
  }
}

const takeFromStack = () => {
    stack.removeElement();
    let stackHTML = document.getElementById('stack');
    while(stackHTML.firstChild){
      stackHTML.removeChild(stackHTML.firstChild)
    }
    stack.stack.forEach(val => {
      stackHTML.appendChild(val)
    });
}