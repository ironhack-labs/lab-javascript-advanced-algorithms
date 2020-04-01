const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {
  //Se generan los 'tiles' de las posiciones de la cola y se les añade un id identificativo
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const item = document.createElement('li')
    item.classList.add('inactive')
    item.id = `item${i + 1}`
    queueUL.appendChild(item)
  }
};

generateListQueue();

//Se activan los mensajes de error
const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerHTML = queue.dequeue(type)
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerHTML = queue.enqueue(type)
  }
};

const addToQueue = () => {
  //Secomprueba que haya hueco en la queue
  if (queue.canEnqueue()) {
    //Si esta el mensaje de error se desactiva
    if (warningBottomQueue.style.display === 'block') {
      warningBottomQueue.style.display = 'none'
    }

    //Se añade el elemento a la fila
    queue.enqueue(queueInput.value)
    clearQueueInput()

    //Se activa el 'tile'
    queueUL.querySelector(`#item${queue.queueControl.length}`).className = 'active'

    //Se actualizan el contenido de los tiles del DOM
    let index = 0
    queueUL.querySelectorAll('.active').forEach(elm => {
      elm.innerHTML = queue.queueControl[index]
      index++
    })

  } else generateWarningQueue('overflow')
};

const removeFromQueue = () => {
  //Si esta el mensaje de error se desactiva
  if (!queue.isEmpty()) {
    if (warningTopQueue.style.display === 'block') {
      warningTopQueue.style.display = 'none'
    }
    //Se quita del DOM
    const item = queueUL.querySelector(`#item${queue.queueControl.length}`)
    item.className = 'inactive'
    item.innerHTML = ''
    //Se elimina de la lista
    queue.dequeue()

  } else generateWarningQueue('underflow')
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
