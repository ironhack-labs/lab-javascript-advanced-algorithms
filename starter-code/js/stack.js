const stack = new StackDataStructure;
const addButton = document.querySelector("#addbtn");
const takeButton = document.querySelector("#takebtn");
const input = document.querySelector("#inputText");
const ulList = document.querySelector("#stackPile");

let liDOMEL = document.createElement("li");

//let arrayList = [...document.querySelectorAll(".bg")];


console.log(stack.stackControl)
//------------ADD--------------
addButton.onclick = function(){

    let arrayLi = [...document.querySelectorAll(".bg")];
    let getInput = input.value;
    let lastLi = arrayLi[arrayLi.length - 1];
    let overLi = arrayLi[0];

    if(stack.canPush()){
    stack.stackControl.push(getInput)
    
    lastLi.innerText = getInput;
    lastLi.classList.remove("bg");

    if (stack.stackControl.length >= 8){
        overLi.classList.add("over")
        overLi.innerText = stack.push();
    }
        
    }else{
       
    }
    
    //arrayList.filter(el => el.classList("bg"))
    
    console.log(stack.stackControl)
}

takeButton.onclick = function(){
    alert("pulsando TAKE")
}

