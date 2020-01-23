let stack = new StackDataStructure();
let sAddBtn = document.getElementById('buttonaddstack');
let sTakeBtn = document.getElementById('buttontakestack');
let stack1 = document.getElementById('div1');
let stack2 = document.getElementById('div2');
let stack3 = document.getElementById('div3');
let stack4 = document.getElementById('div4');
let stack5 = document.getElementById('div5');
let stack6 = document.getElementById('div6');
let stack7 = document.getElementById('div7');
let stack8 = document.getElementById('div8');



sAddBtn.addEventListener('click', function () {
    let stackVal = document.getElementById('stackinput').value;

    stack.push(stackVal)
    if (stack.stackControl[0] != undefined) {
        stack8.innerText = stack.stackControl[0]
        stack8.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[1] != undefined) {
        stack7.innerText = stack.stackControl[1]
        stack7.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[2] != undefined) {
        stack6.innerText = stack.stackControl[2]
        stack6.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[3] != undefined) {
        stack5.innerText = stack.stackControl[3]
        stack5.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[4] != undefined) {
        stack4.innerText = stack.stackControl[4]
        stack4.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[5] != undefined) {
        stack3.innerText = stack.stackControl[5]
        stack3.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[6] != undefined) {
        stack2.innerText = stack.stackControl[6]
        stack2.className = "arraybox color-border blueboxbg"
    }
    if (stack.stackControl[7] != undefined) {
        stack1.innerText = stack.stackControl[7]
        stack1.className = "arraybox color-border blueboxbg"
    }

})


sTakeBtn.addEventListener('click', function () {

    // new Function(procedure)()
    // new Function(procedure2)()
    // console.log(procedure2)



    //if (stack.stackControl[stack.stackControl.length - 1] != undefined) {
    let lastPosition = stack.stackControl.length
    let procedure = `stack${lastPosition}.innerText = ""`
    let procedure2 = `stack${lastPosition}.className = "arraybox color-border"`
    stack.pop()
    eval(procedure)
    eval(procedure2)
    //}


})

