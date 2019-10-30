let add = document.querySelector(".btn-info");
let take = document.querySelector(".btn-danger");
let stackContainer = document.querySelector("#parentList");
let input = document.querySelector("#text");
let newLi = document.createElement("li");


let stack = new StackDataStructure;
console.log(stackContainer);

add.onclick = function () {
    let elem = input.value;
    let listItem = document.querySelectorAll(".bg-light");
    if (stack.canPush()) {
        stack.push(elem);
        let lastEmpty = listItem[listItem.length - 1];
        lastEmpty.innerHTML = elem;
        lastEmpty.setAttribute("class", "list-group-item bg-info");
    } else {
        let firstLi = stackContainer.firstElementChild;
        newLi.innerHTML = "STACK OVERFLOW"
        newLi.setAttribute("class", "list-group-item bg-danger");
        stackContainer.insertBefore(newLi, firstLi);
    }

}

take.onclick = function () {
    let elem = input.value;
    let over = document.querySelector(".bg-danger")
    
    if (over){
        over.innerHTML = ("");
       over.setAttribute("class", "list-group-item");

}else if (stack.isEmpty()) {
        newLi.innerHTML = ("STACK UNDERFLOW");
        newLi.setAttribute("class", "list-group-item bg-danger");
        stackContainer.appendChild(newLi)
    } else {
    stack.pop(elem);
    let stackList = document.querySelectorAll(".bg-info");
    let firstEl = stackList[0];
    firstEl.setAttribute("class", "list-group-item bg-light");
    firstEl.innerHTML = ("");
}



}