/*VETE AL FINAL CLAUDIA*/
const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => { // para limpiar el input, donde escribes el item a incluir
  queueInput.value = '';
};

const generateListQueue = () => {/*Propiedades de CSS*/
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';
  queueUL.innerHTML = '';
  let length = queue.display().length;
  let size = queue.MAX_SIZE - length;
  queue.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerText = type;
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerText = type;
  }
};

const addToQueue = () => {
  //try {
  if (queue.enqueue(queueInput.value) === 'Queue Overflow') {
    generateWarningQueue('overflow');
  } else {
    clearQueueInput();
    generateListQueue();
  }
  // } catch (error) {
  //   // there was an overflow error, handle it
  // }
};

const removeFromQueue = () => {
  try {
    if (queue.dequeue() === 'Queue underflow') {
      generateWarningQueue('underflow');
    } else {
      generateListQueue();
    }
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);


/*En esta lo primero que hay que hacer es rellenar el js de las queue que es como el 
de las stack, que nos dan hecha. Teniendo en cuenta que algunos métodos cambian, como 
el push y el pop (fijate en las horas de data.js de cada una de ellas!!)*/