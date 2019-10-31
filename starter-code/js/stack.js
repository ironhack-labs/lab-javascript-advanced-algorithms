let btnAdd = document.getElementById('addStack')
let btnTake = document.getElementById('takeStack')
let stack = new StackDataStructure()
let txt = document.getElementById('input')
let elements = document.getElementsByClassName('div')
let txt1 = ""


btnAdd.addEventListener('click', function () {
    if (stack.stackControl.length < 9) {
        let num = stack.MAX_SIZE - 1 - stack.stackControl.length
        elements[num].innerText = txt.value
        stack.push(txt.value)

    } else {
        elements[0].innerText = `stack Overflow`
    }
})
btnTake.addEventListener('click', function () {
    if (stack.stackControl.length > 0) {
        let num = stack.MAX_SIZE - 1 - stack.stackControl.length
        elements[num].innerText = txt1
        stack.pop(txt)
    } else {
        elements[9].innerText = `stack Underflow`
    }

})