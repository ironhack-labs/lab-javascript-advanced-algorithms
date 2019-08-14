import StackDataStructure from "../src/StackDataStructure.js"

const newStack = new StackDataStructure();

const addBtn = document.getElementById("add_btn");
const takeBtn = document.getElementById("take_btn")

var overFlowing = false;
var underFlowing = false;


function flowTest() {
  var ovFlow = document.getElementById("overflow");
  var udFlow = document.getElementById("underflow");
  if (overFlowing) {
    ovFlow.style.height = "30px";
    ovFlow.style.visibility = "visible";
    console.log("Stack Overflow");
  }
  else {
    ovFlow.style.height = "0px";
    ovFlow.style.visibility = "hidden";
  }
  if (underFlowing) {
    udFlow.style.height = "30px";
    udFlow.style.visibility = "visible";
    console.log("Stack Underflow");
  }
  else {
    udFlow.style.height = "0px";
    udFlow.style.visibility = "hidden";
  }
}

console.log(newStack.stackControl.length)
const addHandler = () => {
  flowTest()
  if (newStack.canPush()) {
    underFlowing= false;
    var i = newStack.stackControl.length;
    var goodBox = document.getElementById(`content-box-${i}`);
        
    var data = document.getElementById("dotdot").value;
    console.log(data);
    
    goodBox.classList.toggle("blueBox");
    goodBox.innerHTML = data;
    
    newStack.push(data);
    console.log(newStack);
  }
  else {
    overFlowing = true;
  }
  flowTest()
}

const takeHandler = () => {
  console.log(newStack.isEmpty())
  if (newStack.isEmpty()) {
    console.log(newStack.isEmpty())
    newStack.counter = 0;
    underFlowing = true;
    overFlowing = false;
    
    flowTest()
  }
  else {
    overFlowing = false;
    var j = newStack.stackControl.length-1;
    console.log("stack length : ",newStack.stackControl.length)
    console.log("counter : ",newStack.counter)
    var fullBox = document.getElementById(`content-box-${j}`);
    
    fullBox.classList.toggle("blueBox");
    fullBox.innerHTML = "";
    
    newStack.stackControl.pop();
    newStack.counter -=1;
    console.log(newStack.stackControl)
    flowTest()
  }
}

addBtn.onclick = addHandler;
takeBtn.onclick = takeHandler;