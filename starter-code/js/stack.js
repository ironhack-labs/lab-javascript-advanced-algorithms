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
let items = stack.querySelectorAll("li");
let Sover = document.querySelector(".overS");
let Sunder = document.querySelector(".underS");

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
  clearMessageStack()
  console.log(StackData.stackControl);
    }
});

deleter.addEventListener("click", () => {
    if (StackData.isEmpty()) {
        paintStackUnderFlow()
    } else {
  StackData.pop();
  paintStack();
  clearMessageStack()
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
    Sover.innerText = "STACK OVERFLOW"
}

function paintStackUnderFlow() {
    Sunder.innerText = "STACK UNDERFLOW"
}

function clearMessageStack() {
   if (Sover.innerText !== "" || Sunder.innerText !== ""){
       Sover.innerText = ""
       Sunder.innerText = ""
   }
}