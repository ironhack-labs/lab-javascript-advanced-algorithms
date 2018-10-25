const queue = new QueueDataStructure(10);

const addToQueue = () => {
  let put = document.getElementsByTagName('input')[0].value;
  let el = document.createElement('div');
  el.innerText = put;
  el.setAttribute('class', put);
  queue.addElement(el);
  let queueHTML = document.getElementById('queue');

  queue.stack.forEach(val => {
    queueHTML.appendChild(val);
  })
}

const takeFromQueue = () => {
  queue.removeElement();
  let queueHTML = document.getElementById('queue');
  while(queueHTML.firstChild){
    queueHTML.removeChild(firstChild)
  }
  queue.stack.forEach(val => {
    queueHTML.appendChild(val)
  });
}


let addBtn = document.getElementById('addBtn').addEventListener('click', addToQueue);
let takeBtn = document.getElementById('takeBtn').addEventListener('click', takeFromQueue);