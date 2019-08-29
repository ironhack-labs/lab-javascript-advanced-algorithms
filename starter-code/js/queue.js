
const queue = new QueueDataStructure();

drawQueue();

document.querySelector('.btn-insert.queue').onclick = addQueue;


function addQueue() {
  let input = document.querySelector("input.queue");

  let newElement = input.value;
  
  queue.enqueue(newElement);

  drawQueue();
}

function drawQueue() {

  if(queue.isEmpty() == false) {
    let newListItem = queue.queueControl.reverse()
                                        .reduce((ac, item) => ac + 
    `
    <li>
    ${item}
    </li>
    `);

    let list = document.querySelector(".queue ol");
    list.innerHTML = newListItem;
  }
  

}