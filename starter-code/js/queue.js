import QueueDataStructure from "../src/QueueDataStructure.js"

const newQueue = new QueueDataStructure();

const addBtn2 = document.getElementById("add_btn2");
const takeBtn2 = document.getElementById("take_btn2")

var queueOverFlowing = false;
var queueUnderFlowing = false;


function flowTest2() {
  var ovFlow = document.getElementById("overflow");
  var udFlow = document.getElementById("underflow");
  if (queueOverFlowing) {
    ovFlow.style.height = "30px";
    ovFlow.style.visibility = "visible";
    console.log("Stack Overflow");
  }
  else {
    ovFlow.style.height = "0px";
    ovFlow.style.visibility = "hidden";
  }
  if (queueUnderFlowing) {
    udFlow.style.height = "30px";
    udFlow.style.visibility = "visible";
    console.log("Stack Underflow");
  }
  else {
    udFlow.style.height = "0px";
    udFlow.style.visibility = "hidden";
  }
}



const addHandler2 = () => {
  flowTest2()
  if (newQueue.canEnqueue()) {
    queueUnderFlowing= false;
    var i = newQueue.queueControl.length;
    var goodBox = document.getElementById(`queue-box-${i}`);
        
    var data = document.getElementById("dotdot2").value;
    
    goodBox.classList.toggle("blueBox");
    goodBox.innerHTML = data;
    
    newQueue.enqueue(data);
  }
  else {
    overFlowing = true;
  }
  flowTest2()
}

addBtn2.onclick = addHandler2;
