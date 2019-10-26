var btnAdd = document.querySelector("#addButton");
var btnTake = document.querySelector("#takeButton");
var inputElement = document.querySelector("#input");
var myBlocks = document.querySelectorAll(".elements div ");
var stack = new StackDataStructure();
//ADD ELEMENT
function updateElement() {
  let arrayIndex = 0;
  let reverseArray = stack.stackControl;
  for (let i = myBlocks.length - 1; i >= 0; i--) {
    if (typeof reverseArray[arrayIndex] !== "undefined") {
      myBlocks[i].textContent = reverseArray[arrayIndex];
      myBlocks[i].className = "colored";
      arrayIndex++;
    } else {
      myBlocks[i].textContent = "";
      myBlocks[i].className = "";
    }
  }
}
// function removeUpdate(){
//     let arrayIndex = 0;
//     let reverseArray = stack.stackControl.reverse()
// }
//ADD ELEMENT
function addElement() {
  stack.push(inputElement.value);
  updateElement();
}

// //TAKE ELEMENT
function takeElement() {
  stack.pop();
  updateElement();
}

btnAdd.onclick = addElement;
btnTake.onclick = takeElement;

//METHODE 2 FLEX-REVERSE
