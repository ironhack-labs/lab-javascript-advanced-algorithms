let btnStack1 = document.getElementById('stackAdd');
let btnStack2 = document.getElementById('stackTake');
let dataStack = new StackDataStructure()




btnStack1.addEventListener('click', function () {
    let elm = document.getElementById("input1").value;
    let elmStack = dataStack.push(elm)
    let stacks = document.getElementsByClassName("st")
    stacks = [...stacks].reverse()
    for (let i = 0; i < elmStack.length; i++) {
        const element = stacks[i];
        element.innerHTML = elmStack[i]
        element.style.backgroundColor = '#c6b1c9';

    }


})

btnStack2.addEventListener('click', function () {

})