
const stack = new StackDataStructure();

if(!stack.isEmpty()) {
  drawStack(stack.stackControl);
}

document.querySelector('.btn-insert.stack').onclick = addStack;


function addStack() {
  let input = document.querySelector("input.stack");

  let newElement = input.value;
  
  
  let stackData = stack.push(newElement);

  drawStack(stackData);
}

function drawStack(array) {

  if(Array.isArray(array)) {
    let newListItem = array.reverse().reduce((ac, item) => ac + 
    `
    <li>
    ${item}
    </li>
    `);

    let list = document.querySelector(".stack ol");
    list.innerHTML = newListItem;
  } else {
    alert(array)
  }
  

}