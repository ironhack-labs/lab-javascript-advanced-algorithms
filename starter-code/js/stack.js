let StackData = new StackDataStructure();

createStack();
function createStack() {
  let stack = document.getElementById("stack");
  for (i = 0; i < StackData.MAX_SIZE; i++) {
    let item = document.createElement("li");
    stack.appendChild(item);
    item.className = i;
  }
}
let stack = document.getElementById("stack");
let input = document.getElementById("input");
let add = document.getElementById("add");
let deleter = document.getElementById("delete");
let items = document.querySelectorAll("li");
let over = document.querySelector(".over");
let under = document.querySelector(".under");

// add.addEventListener("click", () => {
//   StackData.push(input.value);
//   console.log(StackData.stackControl);
// });

// deleter.addEventListener("click", () => {
//   StackData.pop();
//   console.log(StackData.stackControl);
// });

add.addEventListener("click", () => {
    if (!StackData.canPush()) {
        paintStackOverflow()
    } else {
  StackData.push(input.value);
  paintStack();
  clearMessage()
  console.log(StackData.stackControl);
    }
});

deleter.addEventListener("click", () => {
    if (StackData.isEmpty()) {
        paintStackUnderFlow()
    } else {
  StackData.pop();
  paintStack();
  clearMessage()
  console.log(StackData.stackControl);
    }
});

function paintStack() {
    items.forEach((item, idx) => {
        item.innerText = StackData.stackControl[StackData.MAX_SIZE-1-idx] || ""
    })
//   stack.lastChild.innerText = value;
}

function paintStackOverflow() {
    over.innerText = "STACK OVERFLOW"
}

function paintStackUnderFlow() {
    under.innerText = "STACK UNDERFLOW"
}

function clearMessage() {
   if (over.innerText !== "" || under.innerText !== ""){
       over.innerText = ""
       under.innerText = ""
   }
}