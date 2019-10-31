var stack = new StackDataStructure();

let addBtn = document.getElementById('btn-add')
let takeBtn = document.getElementById('btn-take')
let userInput = document.getElementById('textInput')
let divs = document.getElementsByTagName('div')

// console.log(addBtn)
// console.log(takeBtn)
// console.log(userInput)

function pushInput() {
    let divInput = stack.MAX_SIZE - stack.stackControl.length
    stack.push(userInput.value)
    divs[divInput].innerText = userInput.value
    // console.log(stack.stackControl.length)
}

function popInput() {
    stack.pop()
    let divInput = stack.MAX_SIZE - stack.stackControl.length
    divs[divInput].innerHTML = ("")
    // console.log(stack.stackControl.length)
}

addBtn.addEventListener('click', function () {
    // console.log("test addBtn")
    if (stack.canPush()) {
        pushInput()
    } else {
        alert('Stack Overflow')
    }
})

takeBtn.addEventListener('click', function () {
    // console.log("test takeBtn")
    if (stack.isEmpty()) {
        alert('Stack Underflow')
    } else {
        popInput()
    }
})