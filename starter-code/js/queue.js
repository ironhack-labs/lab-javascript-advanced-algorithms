const queue = new QueueDataStructure(10);

const addToQueue = () => {

  let over = document.querySelector('#qus');
  if(queue.stack.length > queue.capacity){
    return over.innerText = 'queue Overflow'
//   } else if(queue.queue.length <= 0){
//     return over.innerText = 'queue Underflow'
  } else {
    let put = document.getElementsByTagName('input')[0].value;
    let el = document.createElement('div');
    el.innerText = put;
    el.setAttribute('class', 'queue');
    queue.addElement(el);
    let queueHTML = document.getElementById('queue');
  
    queue.stack.forEach(val => {
      queueHTML.appendChild(val);
    })
  }
}

const takeFromQueue = () => {
  queue.removeElement();
  let queueHTML = document.getElementById('queue');
  while(queueHTML.firstChild){
    queueHTML.removeChild(queueHTML.firstChild)
  }
  queue.stack.forEach(val => {
    queueHTML.appendChild(val)
  });
}


let addBtn = document.getElementById('addBtn').addEventListener('click', function(){addToQueue();addToStack()});
let takeBtn = document.getElementById('takeBtn').addEventListener('click', function(){takeFromQueue();takeFromStack()});