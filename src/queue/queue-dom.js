const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none'
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
  queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
    ///generateWarningQueue();
    /*
  try {
    
    // ... your code goes here
  } catch (error) {
    generateWarningQueue('overflow');

  }
  */
};

const removeFromQueue = () => {
  try {
   queue.dequeue();
   generateListQueue();
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);




/*
class Food{

  constructor(carbs,prot,fat){
    this.carbs = carbs;
    this.prot = prot;
    this.fat = fat;
  }

  calorieC = this.carbs * 4;
  calorieP = this.prot * 4;
  calorieF = this.fat * 9;

  TotalCalories = this.calorieC + this.calorieP + this.calorieF;

  printcalories(){
    console.log(`This food has P: ${this.prot} C: ${this.carbs} F: ${this.fat} and has a caloric total amount of ${this.TotalCalories}`);
  }
}*/