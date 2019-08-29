let stack = new StackDataStructure();

let addBtn = document.getElementById('addbtn');
let removeBtn = document.getElementById('removebtn');


function pushItem(inputField) {
  stack.push(document.getElementById('inputField').value)
  console.log(stack);
}

function removeItem() {
  stack.pop()
  console.log(stack);
}

// addBtn.onclick(push(document.querySelector(".inputbox").innerHTML))

addBtn.addEventListener('click', function () {
  pushItem();
})

removeBtn.addEventListener('click', function () {
  removeItem();
})