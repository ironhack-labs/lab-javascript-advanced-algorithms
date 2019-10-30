const stack = new StackDataStructure();

let addBtn = document.getElementsByTagName('button')[0]
let takeBtn = document.getElementsByTagName('button')[1]
let input = document.getElementById('input')
let divs = document.getElementsByTagName('div')

console.log(stackControl) // stackControl is undefined. why?

addBtn.addEventListener('inputClick', function () {

    let stack = new StackDataStructure()
    addBtn.onclick = () => {
        stack.push(input.value)
    }
    console.log(stackDataStructure.input.value) // no console.log??
    let numberInsert = stackControl.indexOf(input.value)
})

// divs[stackControl.length].innerHTML =
//     stackControl[stackControl.length - 1]
// }