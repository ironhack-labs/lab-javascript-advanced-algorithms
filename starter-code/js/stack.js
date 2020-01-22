let stack = new StackDataStructure();

// let stackControlUI = [...stack.stackControl];
// console.log(stackControlUI);

printList();

function deleteChild() { 
    var e = document.querySelector("ul"); 
    e.innerHTML = ""; 
} 

// printList
function printList(){

    deleteChild();
    for(let i = 0; i < stack.MAX_SIZE; i++){
        let list = document.querySelector('ul')
        let stackItem = document.createElement('li');
        stackItem.className = "list-group-item";
        stackItem.innerHTML = stack.stackControl[stack.MAX_SIZE - i - 1]; //Este es mi truco para hacer el FILO ese
        if(stackItem.innerHTML === "undefined"){stackItem.innerHTML = ""};
        console.log(stack.stackControl[stack.MAX_SIZE - i - 1]);
        list.appendChild(stackItem);
    }
}


//Adding
let itemToAdd;
let bntAdd = document.querySelector(".btn-info");
bntAdd.onclick = function() {

  itemToAdd = document.querySelector(".form-control").value;
  stack.push(itemToAdd);

  //Agregarlo al último li
  //Cambiarle el nombre de clase 
  //Limpiar
  //Pintar
  //Vivir la vida intensamente

  document.querySelector(".form-control").value = "";
  printList();
  
};

//Removing
let lastItem;
let btnTake = document.querySelector(".btn-danger");

btnTake.onclick = function() {
  lastItem = document.querySelector(".list-group-item");
  document.querySelector(".list-group-item").innerHTML = "";
  stack.pop(lastItem);
  printList();

  console.log("Remove items");
};

// LAST OUT
// let lastItem = document.querySelector(".list-group-item.empty").innerHTML = itemToAdd;

  // Método MOMO
  // let marioDOMEl = document.createElement("div")
  // marioDOMEl.className = "mario"
  // document.body.appendChild(marioDOMEl)