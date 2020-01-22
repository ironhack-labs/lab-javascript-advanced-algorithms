let stack= new StackDataStructure()
let theLast = "";
let textInput = "";
let control = stack.stackControl;
let addStack = document.getElementById(`addstack`);
let takeStack = document.getElementById(`takestack`);


addStack.addEventListener("click", ()=> {added();} )
takeStack.addEventListener("click", ()=> {taked();} )

function added(){
    if(stack.canPush()){
        document.getElementById("underflow").style.opacity = 0;
        textInput = document.getElementById("in-text").value
        theLast = document.querySelectorAll(".empty");
        theLast[theLast.length - 1].innerHTML = textInput;
        theLast[theLast.length - 1].classList.add("full");
        theLast[theLast.length - 1].classList.remove("empty");
        stack.push(control);  
    } else {
        document.getElementById("overflow").style.opacity = 1
    }
}
function taked(){
    if(stack.isEmpty()){
        document.getElementById("underflow").style.opacity = 1
    } else {
        document.getElementById("overflow").style.opacity = 0
        textInput = ""
        theLast = document.querySelectorAll(".full");
        theLast[0].innerHTML = textInput;
        theLast[0].classList.remove("full");
        theLast[0].classList.add("empty");
        stack.pop(control);
        }
}