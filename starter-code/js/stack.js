let input = document.getElementById("input")
let addBtn = document.querySelector(".addButton")
let takeBtn = document.querySelector(".takeButton")
let container = document.getElementById("stack")
let stack = new StackDataStructure ()
let maxSize = stack.MAX_SIZE
let control = stack.stackControl
//create loop to append div into container
for(let i = 0; i < maxSize; i++){
    let div = document.createElement("div")
    div.setAttribute("class","box")
    container.appendChild(div);
}


// addBtn.onclick = event => {
//     event.currentTarget.
// }