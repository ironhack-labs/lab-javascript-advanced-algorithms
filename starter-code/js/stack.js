const newStack = new StackDataStructure(8)

const input = document.getElementById("input")
const addButton = document.getElementById("add-button")
const takeButton = document.getElementById("take-button")

const renderStack = () => {
    const stackElement = document.getElementById("stack")
    let content = "";
    newStack.stackControl.forEach(item => {
        content = `<div class="filled">${item}</div>` + content
    })
    const availableSpace = newStack.MAX_SIZE - newStack.stackControl.length
    for(let i=0;i<availableSpace;i++){
        content = "<div></div>" + content
    }
    if(newStack.isEmpty()){
        content = content + "<div> Stack UnderFlow</div>"
    }else if(newStack.isFull()){
        content = content + "<div>Stack Overflow</div>" }

    stackElement.innerHTML = content
}

addButton.addEventListener('click', () => {
    newStack.push(input.value);
    renderStack();

})
takeButton.addEventListener('click', () => {
    newStack.pop();
    renderStack();

})

renderStack();

