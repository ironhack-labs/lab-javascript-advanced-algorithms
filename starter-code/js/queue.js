const $queueContainer  = [...document.getElementsByClassName("queue-container")];
const $addQueueButton  = document.querySelector(".btn-queue-add");
const $takeQueueButton = document.querySelector(".btn-queue-take");
const $inputTextQueue  = document.querySelector(".intextQueue");
const $popNumberQueue  = document.querySelector(".popNumberQueue");
let queue1;
queue1 = new QueueDataStructure();
console.log("queue1.MAX_SIZE"+ queue1.MAX_SIZE);

for (let i = 0 ; i < queue1.MAX_SIZE; i++ ){
    let newQueueElement = document.createElement('div');
    newQueueElement.className = "element";
    newQueueElement.innerHTML =   ``;
    $queueContainer[0].appendChild(newQueueElement);
}

const queuePushItem = ()  => {
  let newNumber = $inputTextQueue.value;
  if (newNumber !== ''){
    let lengthQueue = queue1.queueControl.length + 1;
    let pushResult = queue1.enqueue(newNumber);
    if( pushResult !== 'Queue Overflow'){
        console.log("Array Length" + queue1.queueControl.length);
        $queueContainer[0].childNodes[lengthQueue].innerText = newNumber;
        $queueContainer[0].childNodes[lengthQueue].style.backgroundColor = "#039dfc";
        $queueContainer[0].childNodes[lengthQueue].style.color = "white";
        $queueContainer[0].childNodes[lengthQueue].style.border = "1px solid white"; 
        $inputTextQueue.value = '';   
        $popNumberQueue.innerHTML = ` `; 
    } else {
        console.log(pushResult);
        $queueContainer[0].childNodes[queue1.MAX_SIZE].innerText = `${pushResult}`;
        $queueContainer[0].childNodes[queue1.MAX_SIZE].style.backgroundColor = "#f2ccc9";
        $queueContainer[0].childNodes[queue1.MAX_SIZE].style.color = "red";
        $queueContainer[0].childNodes[queue1.MAX_SIZE].style.border = "1px solid red";
        $popNumberQueue.innerHTML = ` `;
    }
  } 
}
$addQueueButton.addEventListener('click', queuePushItem);

const queuePopItem = ()  => {
    let lengthQueue = queue1.queueControl.length;
    let popResult = queue1.dequeue();
    if( popResult !== 'Queue Underflow'){
        console.log("Pop Result"+ popResult);
        let j = 1;
        for(let i = queue1.queueControl.length; i > 0 ; i--){
            $queueContainer[0].childNodes[j].innerText = queue1.queueControl[i - 1];
            $queueContainer[0].childNodes[j].style.backgroundColor = "#039dfc";
            $queueContainer[0].childNodes[j].style.border = "1px solid white";  
            $queueContainer[0].childNodes[j].style.color = "white";   
            j++;         
        }
        $queueContainer[0].childNodes[lengthQueue].innerText = '';
        $queueContainer[0].childNodes[lengthQueue].style.backgroundColor = "lightGrey";
        $queueContainer[0].childNodes[lengthQueue].style.border = "1px solid white";  
        $queueContainer[0].childNodes[lengthQueue].style.color = "white";
        $popNumberQueue.innerHTML = `${popResult}`;
        $inputTextQueue.value = ''; 
    } else {
      console.log(popResult);
      $queueContainer[0].childNodes[1].innerText = `${popResult}`;
      $queueContainer[0].childNodes[1].style.backgroundColor = "#f2ccc9";
      $queueContainer[0].childNodes[1].style.color = "red";
      $queueContainer[0].childNodes[1].style.border = "1px solid red";
      $popNumberQueue.innerHTML = ` `;
    }
  }


$takeQueueButton.addEventListener('click', queuePopItem);
