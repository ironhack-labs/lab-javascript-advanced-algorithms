var stack = new StackDataStructure
var addBtn = document.querySelector(".btn-primary")
var takeBtn = document.querySelector(".btn-danger")
var overflow = document.getElementsByClassName("overflow")[0]
var underflow = document.getElementsByClassName("overflow")[1]
var elements = document.getElementsByClassName("stack-element")
var elementsArr = Array.from(elements);
var reversed = elementsArr.reverse()
var newElm = ""

function fillStack(newElm){
    for (var i = 0; i < reversed.length; i++){
        if (!reversed[i].className.includes("active")){
            reversed[i].className += " active"
            reversed[i].textContent = newElm
            break;
        }
    }
}

function unfillStack(){
    for (var i = reversed.length - 1; i >= 0; i--){
        if(reversed[i].className.includes("active")){
            reversed[i].className = "stack-element";
            reversed[i].textContent = ""
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
        console.log(stack.stackControl)
    } else {
        fillStack(newElm)
        console.log(stack.stackControl)
    }
}

takeBtn.onclick = function () {
    
    if (overflow.style.visibility === 'visible'){
        overflow.style.visibility = 'hidden'
    }
    if (stack.pop() === "Stack Underflow") {
        stackUnderflow()
        console.log(stack.stackControl)
    } else {
        unfillStack()
        console.log(stack.stackControl)
    }
}