var stack = new StackDataStructure
var addBtn = document.querySelector(".btn-primary")
var takeBtn = document.querySelector(".btn-danger")
var overflow = document.getElementsByClassName("overflow")[0]
var underflow = document.getElementsByClassName("overflow")[1]
var elements = document.getElementsByClassName("stack-element")
var elementsArr = Array.from(elements);
var newElm = ""

function fillStack(newElm){
    for (var i = elementsArr.length - 1; i >= 0; i--){
        if (!elementsArr[i].className.includes("active")){
            elementsArr[i].className += " active"
            elementsArr[i].textContent = newElm
            break;
        }
    }
}

function unfillStack(){
    for (var i = 0; i < elementsArr.length; i++){
        if(elementsArr[i].className.includes("active")){
            elementsArr[i].className = "stack-element";
            elementsArr[i].textContent = ""
            break;
        }
    }
}

function stackOverflow(){
    overflow.style.visibility = 'visible';
}

function stackUnderflow(){
    underflow.style.visibility = 'visible';
}

addBtn.onclick = function () {
    if (underflow.style.visibility === 'visible'){
        underflow.style.visibility = 'hidden'
    }
    newElm = document.querySelector("#add-element").value
    if (stack.push(newElm) === "Stack Overflow") {
        stackOverflow()
    } else {
        fillStack(newElm)
    }
}

takeBtn.onclick = function () {
    
    if (overflow.style.visibility === 'visible'){
        overflow.style.visibility = 'hidden'
    }
    if (stack.pop() === "Stack Underflow") {
        stackUnderflow()
    } else {
        unfillStack()
    }
}