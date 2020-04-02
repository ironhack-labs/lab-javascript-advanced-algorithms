const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
  // Generamos la lista de cajas
  // donde se van a ir añadiendo o borrando las cajas nuevas.
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const liItem = document.createElement('li')
    liItem.classList.add('inactive')
    liItem.id = `item${i + 1}`
    queueUL.appendChild(liItem)
  }
};

generateListQueue();

// Activamos la aparicion de los mensajes de overflow y de underflow
const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here

    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerHTML = queue.dequeue(type)

  } else if (type === 'overflow') {
    // ... your code goes here

    warningTopQueue.style.display = 'block'
    warningTopQueue.innerHTML = queue.enqueue(type)

  }
};

const addToQueue = () => {
  // ... your code goes here

  //Comprobamos que haya espacio en el queue

  if (queue.canEnqueue()) {

    //Desactivamos el mensaje de error    
    warningBottomQueue.style.display = 'none'
    

    //Añadimos el valor ingresado por el usuario al array.
    queue.enqueue(queueInput.value)

    //Limpiamos la linea de ingreso de texto
    clearQueueInput()

    //Activamos las cajas de la lista 
    queueUL.querySelector(`#item${queue.queueControl.length}`).className = 'active'

    //Añadimos al DOM el contenido que ingreso el usuario a las cajas 
    let index = 0
    queueUL.querySelectorAll('.active').forEach(elm => {
      elm.innerHTML = queue.queueControl[index]
      index++
    })

  } else {

    generateWarningQueue('overflow')
    
    }

};

const removeFromQueue = () => {
  // ... your code goes here

  //Comprobamos que el array del queue no este vacio
  if (!queue.isEmpty()) {
   
    //Desactivamos el mensaje de error
    warningTopQueue.style.display = 'none'
    
    //Quitamos del DOM la caja 
    const liItem = queueUL.querySelector(`#item${queue.queueControl.length}`)
    liItem.className = 'inactive'
    liItem.innerHTML = ''

    //Eliminamos el elemento del array
    queue.dequeue()

  } else {

    generateWarningQueue('underflow')
    
  }

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
