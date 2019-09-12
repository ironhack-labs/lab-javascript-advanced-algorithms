console.log('stack yo!');
const stack = new StackDataStructure();
console.log(stack.MAX_SIZE);

const ulStackElement = document.getElementById("stack");
for (let index = 0; index < stack.MAX_SIZE; index += 1) {
    let liEmpty = document.createElement("li");
    liEmpty.classList.add("list-group-item list-group-item-dark");
    liEmpty.dataset.stack = stack.MAX_SIZE - index;
    ulStackElement.appendChild(liEmpty);
}

const addStack = document.getElementById("add-stack");
addStack.onclick = () => {
    let content = document.getElementById("add-element-stack");
    // console.log(content.value);

    if (stack.canPush()){
    stack.push (content.value);

    const liStack = document.querySelector(`li [data-stack = "${stack.size}"]`);
    liStack.innerHTML = stack.stackControl[stack.size - 1];
} else {
    const liStackOverflow = document.createElement('li');
    liStackOverflow.classList.add("list-group-item", "list-group-item-danger");
    liStackOverflow.innerHTML = canPush;
    ulStackElement.insertBefore(liStackOverflow, ulStackElement);

}
};