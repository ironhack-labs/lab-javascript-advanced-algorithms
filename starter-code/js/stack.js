// create stack class
const stack = new StackDataStructure();


 let controleStack= false;

 let stackDiv = document.querySelector('#stack');
createEmptyDivs(stack.MAX_SIZE);

 let btnAdd = document.querySelector('#btn-add');
 let userInput = document.querySelector('#stack-input');
 let btnTake = document.querySelector('#btn-take');
 let popValue = document.querySelector('#pop-value');


btnAdd.addEventListener('click', function (event) {


    console.log("stack", stack.stackControl.length)
    popValue.textContent = '';

    if (userInput.value == "") {

        alert("digite alguma coisa")
        return false;
    } else {

        if (userInput.value.trim()) {
            btnTake.disabled = false;
             let res = stack.push(userInput.value);

            if (res === 'Stack Overflow') {
                let div = createDiv('stack-element stack-over-underflow');
                div.textContent = 'Stack Overflow';
                stackDiv.prepend(div);

                popValue.textContent = 'Stack OverFlow!';
                event.target.disabled = true;
            } else {
                render();
            }
        }
        userInput.value = '';

    }




});


btnTake.addEventListener('click', function () {
    btnAdd.disabled = false;


    console.log("stack", stack.stackControl.length)
     let res = stack.pop();

    if (res === 'Stack Underflow') {
        let div = createDiv('stack-element stack-over-underflow');
        div.textContent = 'Stack Underflow';
        stackDiv.append(div);

        popValue.textContent = 'Stack UnderFlow!';
        event.target.disabled = true;
    } else {
        
        if(!controleStack){

            res = stack.pop();
            controleStack = true;

        }
   
      
        popValue.textContent = res;
        render();
    }
});


function createDiv(classNames) {
     let div = document.createElement('div');
    div.className = classNames;
    return div;
}

function createEmptyDivs(amountOfDiv) {

    for (let i = 0; i <= amountOfDiv -1 ; i++) {
         let div = createDiv('stack-element stack-element-empty div-stack btn');
        stackDiv.prepend(div);
    }
}

function render() {
    stackDiv.innerHTML = '';

    stack.stackControl.forEach(function (element) {
        let div = createDiv('stack-element stack-element-fill');
        div.textContent = element;
        stackDiv.prepend(div);
    });

    let remainder = stack.MAX_SIZE - stack.stackControl.length;
    createEmptyDivs(remainder);
}