
let stack = new StackDataStructure()

let btnAdd = document.getElementById('add')

let btnTake = document.getElementById("take")

let elementos = document.getElementsByTagName("div")

let txt = document.getElementById("input")

console.log(txt)



btnAdd.addEventListener("click", function () {
    if (stack.stackControl.length < 10) {
        let num = stack.MAX_SIZE - 1 - stack.stackControl.length
        elementos[num].innerText = txt.value
        stack.push(txt)
    } else {
        window.alert("Stack Overflow");
    }
})


btnTake.addEventListener("click", function () {
    if (stack.stackControl.length > 0) {
        let num = stack.MAX_SIZE - stack.stackControl.length
        elementos[num].innerText = ""
        stack.pop()
    } else {
        window.alert("Stack Underflow")
    }
})
