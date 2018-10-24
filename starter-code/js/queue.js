const queue = new QueueDataStructure(10);

const addToQueue = () => {
  let put = document.getElementsByTagName('input')[0].value;
  let el = document.createElement('div');
  el.innerText = put;
  el.setAttribute('class', 'queue');
  console.log(el)
  queue.addElement(el);
  console.log(queue.stack)
  updateQueue();
}

const takeFromQueue = () => {
  queue.removeElement();
  updateQueue();
}

const updateQueue = () => {
  let queueHTML = document.getElementById('queue');

  queue.stack.forEach(val => {
    queueHTML.appendChild(val)
  })
}

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addToQueue);
let takeBtn = document.getElementById('takeBtn').addEventListener('click', takeFromQueue);