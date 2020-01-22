let stack = new StackDataStructure();
let queue = new QueueDataStructure();
let value = document.querySelector('input').innerText

let addClick = document.querySelector('.add').onclick = e => {
    // stack.push(value)
    console.log(`has pulsado ADD ${value}`)
}

let takeClick = document.querySelector('.take').onclick = e => {
    console.log("has pulsado TAKE");
    stack.pop()
}

let XXXX =


// document.querySelector('bg-blue').