let stack = new StackDataStructure();
let queue = new QueueDataStructure();
let value

let addClick = document.querySelector('.add').onclick = e => {
    value = document.querySelector('#stack-place').value
    stack.push(value);

    stack.stackControl.forEach((element) => {
        document.querySelector('#stack1')


        console.log(`has pulsado ADD`);
        console.log(stack.stackControl)
        // let charge = document.querySelector('bg-blue').
    }

let takeClick = document.querySelector('.take').onclick = e => {
        console.log("has pulsado TAKE");
        stack.pop()
    }




// document.querySelector('bg-blue').