//VARIABLES
//general variables
const container = document.querySelector(".container")
const input = document.getElementsByClassName("input")[0];

//buttons variables
const stackBtn = document.querySelector('.stackBtn')
const popBtn = document.querySelector('.popBtn')

//cells variables
const cell = document.createElement("div");
cell.classList.add("empty-array-cell") 

// STACK LOGIC
const stack = new StackDataStructure()

//INITIAL EMPTY CELLS
const emptyCellSetup = () => {
  for(i=0; i<stack.MAX_SIZE; i++){
    container.appendChild(cell.cloneNode(true));
  }
}
emptyCellSetup() 

//BUTTONS SETUP
// Stack button
function stackClick(){
  if(stack.canPush()){
    document.querySelectorAll("div")[(stack.MAX_SIZE - 1) - stack.stackControl.length].classList.toggle("empty-array-cell")
    document.querySelectorAll("div")[(stack.MAX_SIZE - 1) - stack.stackControl.length].classList.toggle("fill-array-cell")
    document.querySelectorAll("div")[(stack.MAX_SIZE - 1) - stack.stackControl.length].classList.add("selected")
    document.querySelectorAll("div")[(stack.MAX_SIZE - 1) - stack.stackControl.length].innerText = input.value
    stack.push(input.value)
  }
  input.value = ""
}
stackBtn.onclick = stackClick

// Pop button
function popClick(){
  if(!stack.isEmpty()){
    document.querySelectorAll(".selected")[0].classList.toggle("fill-array-cell")
    document.querySelectorAll(".selected")[0].classList.toggle("empty-array-cell")
    document.querySelectorAll(".selected")[0].innerText = ''
    document.querySelectorAll(".selected")[0].classList.remove("selected")
    stack.pop()
  }
  input.value = ""
}
popBtn.onclick = popClick

// Input listener
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    stackClick();
  }
});


