let stack= new StackDataStructure();
let stackButton=  document.querySelector(".btn-add");
let stackButtonRem=  document.querySelector(".btn-rem");
let stackInput= document.querySelector(".stack-in");

const getBox = (n) => {
  return document.querySelector(`.s${n}`);
}
const printStack = (boxArr) => {
  boxArr.forEach((box, idx)=> {
    getBox(idx).innerHTML= `${box}`;
    getBox(idx).className= `s${idx} clicked`;
  });
};
const popLast = (lastElement) => {
  let lastStackIdx= stack.stackControl.length;
  document.querySelector(`.s${lastStackIdx}`).className= `s${lastStackIdx}`;
  document.querySelector(`.s${lastStackIdx}`).innerHTML= "";
  // document.querySelector(`.${getBox(stack.stackControl.indexOf(lastElement))}`).className=`s${getBox(stack.stackControl.indexOf(lastElement))}`;
  // document.querySelector("body").style.backgroundColor= "red"
}

stackButton.onclick = function () {
  if(stackInput.value=="Stack Underflow") {
    stackInput.className="stack-in";
    stackInput.value="";
  }
  let pushed=stack.push(`${stackInput.value}`);
  if (typeof pushed=="string") {
    stackInput.value= `${pushed}`
    stackInput.className=`stack-in stack-xflow`;
  }
  else {
    printStack(pushed);

  }
}


stackButtonRem.onclick = function () {
  stackInput.className="stack-in";
  stackInput.value="";
  let popped=stack.pop();
  if(popped=="Stack Underflow") {
    stackInput.value= `${popped}`;
    stackInput.className=`stack-in stack-xflow`;
    setTimeout(()=> { 
      stackInput.className="stack-in";
      stackInput.value="";
    }, 1500)
    
  }
  popLast(popped);
  

}
 
  




