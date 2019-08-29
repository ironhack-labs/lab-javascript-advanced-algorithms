let queue= new QueueDataStructure();
let queueButton=  document.querySelector(".btn-addq");
let queueButtonRem=  document.querySelector(".btn-remq");
let queueInput= document.querySelector(".queue-in");

const getBoxQ = (n) => {
  return document.querySelector(`.q${n}`);
}
const printQueue = (boxArr) => {
  boxArr.forEach((box, idx)=> {
    let i=0;
    getBoxQ(box.length-i).innerHTML= `${box}`;
    getBoxQ(box.length-i).className= `q${idx} clicked`;
    ++i;
  });
};
const popLastq = (lastElement) => {
  let lastQueueIdx= queue.queueControl.length;
  document.querySelector(`.q${lastQueueIdx}`).className= `q${lastQueueIdx}`;
  document.querySelector(`.q${lastQueueIdx}`).innerHTML= "";
  // document.querySelector(`.${getBox(stack.stackControl.indexOf(lastElement))}`).className=`s${getBox(stack.stackControl.indexOf(lastElement))}`;
  // document.querySelector("body").style.backgroundColor= "red"
}

queueButton.onclick = function () {
  if(queueInput.value=="Queue Underflow") {
    queueInput.className="queue-in";
    queueInput.value="";
  }
  let pushedQ=queue.enqueue(`${queueInput.value}`);
  if (typeof pushedQ=="string") {
    queueInput.value= `${pushedQ}`;
    queueInput.className=`queue-in stack-xflow`;
  }
  else {
    printQueue(pushedQ);

  }
}


queueButtonRem.onclick = function () {
  queueInput.className="queue-in";
  queueInput.value="";
  let poppedQ=queue.dequeue();
  if(poppedQ=="Queue Underflow") {
    queueInput.value= `${poppedQ}`;
    queueInput.className=`queue-in stack-xflow`;
    setTimeout(()=> { 
      queueInput.className="queue-in";
      queue.value="";
    }, 1500)
    
  }
  popLastq(poppedQ);
  

}
 
  




