document.querySelector(".add-stack").onclick = function() {
    stack = new StackDataStructure;
    let currentValue = document.querySelector(".stack-item").value;
    stack.push(currentValue);
    drawStack();
}

function drawStack() {
    let theHTML = ``;
    for (let i= 0; i < stack.lenght; i++) {
        ac += `<li class="position-${i} filled">${stack[i]}</li>`
    }
    document.querySelector("ul").innerHTML = theHTML;

}