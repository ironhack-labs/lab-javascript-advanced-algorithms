let stack = new StackDataStructure()

let addStackButton = document.getElementById('addStackButton').addEventListener('click', addStack)
let takeStackButton = document.getElementById('takeStackButton').addEventListener('click', takeStack)

console.log(addStackButton)
// 

function printList() {
    let stackDOM = document.querySelector('.stack')
    let stackItem = ''
    for (i = 0; i < stack.MAX_SIZE; i++) {
        stackItem = document.createElement('li')
        stackItem.classList.add('empty')
        stackDOM.appendChild(stackItem)

    }

}

printList()

let input = ''
let stackLi = ''
let gif = ''

function addStack() {
    if (stack.canPush()) {
        gif = document.getElementById('gif')
        input = document.querySelector('.input-lg').value
        stackLi = document.querySelectorAll('.empty')
        gif.classList.remove('yes')
        stackLi[stackLi.length - 1].innerHTML = input
        stackLi[stackLi.length - 1].classList.remove('empty')
        stackLi[stackLi.length - 1].classList.add('list-group-item')
        stackLi[stackLi.length - 1].classList.add('full')

        stack.push(input)
    } else {

        return alert('FUUUUUULL')
    }
}

function takeStack() {
    gif = document.getElementById('gif')
    if (stack.isEmpty()) {
        gif.classList.add('yes')

    } else {
        stackLi = document.querySelectorAll('.full')
        stackLi[0].innerHTML = ''
        stackLi[0].classList.remove('full')
        stackLi[0].classList.add('empty')
        stack.pop(input)
    }
}