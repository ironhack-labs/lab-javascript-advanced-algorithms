let queue = new QueueDataStructure();
// let addBtn2 = document.querySelector('.2ba');
// let takeBtn2 = document.querySelector(".2bt");
let input2 = document.querySelector(".type2");
let list2 = document.querySelector(".list2");

function addInputTolistT() {
  let bar2 = input2.value;
  let newLi2 = document.createElement("li");
  let textLi2 = document.createTextNode(bar2);

  if (queue.queueControl.length < queue.MAX_SIZE) {
    newLi2.appendChild(textLi2);
    queue.queueControl.push(textLi2);
    list2.appendChild(newLi2);

    console.log("Añado Elemento");
    console.log(queue.queueControl);
  } else {
    console.log("No puedo añadir más");
  }
}

function takeFromlist2() {
  let newLi2 = document.querySelectorAll("li");

  if (queue.queueControl.length == 0) {
    // list2.appendChild(newLi2);
    // newLi2.createTextNode("queue Underflow");
    // newLi2.setAttribute("class", "under");
  } else {
    list2.firstChild.remove();
    queue.queueControl.pop();
  }
}
