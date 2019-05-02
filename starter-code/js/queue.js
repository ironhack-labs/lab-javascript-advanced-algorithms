const addQButton = document.getElementById('add-queue-item')
const takeQButton = document.getElementById('take-queue-item')
const queueUl = document.getElementById('queue')
const queue = new QueueDataStructure()

/* function createQueue(max) {

  for (let i = 0; i < max; i++) {
    //debugger;
    const newNode = document.createElement('li');
    newNode.className = 'list-group-item'; // set the CSS class
    queueUl.insertBefore(newNode, queueUl.children[0])
  }

} */


const createQItem = queue => {
  console.log('entro en createItem')
  const newNode = document.createElement('li');
  const newItem = document.getElementById('queue-item-text')

  if (queue.enqueue(newItem.value) === `Queue Overflow`) {
    newNode.innerText = `Queue Overflow`
    newNode.style.backgroundColor = 'red';
    newNode.style.color = 'white'
  } else {
    newNode.innerText = newItem.value
    newNode.style.backgroundColor = 'aliceblue'; // set the CSS class
  }
  console.log(queue.queueControl)
  queueUl.insertBefore(newNode, queueUl.firstElementChild)
}

const takeQItem = () => {
  console.log('entro en delete')

  if (queue.dequeue() === `Queue Underflow`) {
    console.log('entro en if')
    const newNode = document.createElement('li');
    newNode.innerText = `Queue Underflow`
    newNode.style.backgroundColor = 'red';
    newNode.style.color = 'white'
    queueUl.insertBefore(newNode, queueUl.firstElementChild)
  } else {
    console.log('entro en else')
    queueUl.removeChild(queueUl.lastElementChild)
  }
}

window.onload = () => {

  //createQueue(queue.MAX_SIZE)
}

addQButton.onclick = (e) => {
  e.preventDefault();
  console.log(e)
  createQItem(queue)

}
takeQButton.onclick = (e) => {
  e.preventDefault();
  takeQItem(queue)
}