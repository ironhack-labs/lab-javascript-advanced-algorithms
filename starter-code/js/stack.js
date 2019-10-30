const stack = new StackDataStructure;
 
const addButton = document.querySelector("#addbtn");
const takeButton = document.querySelector("#takebtn");
const getInput = document.querySelector("#inputText");
const ulList = document.querySelector("#stackPile");

let liDOMEL = document.createElement("li");

//let arrayList = [...document.querySelectorAll(".bg")];


addButton.onclick = function(){
    let arrayList = [...document.querySelectorAll(".bg")];
    
    let prueba = getInput.value;
    
    ultimo = arrayList[arrayList.length - 1];

    ultimo.innerText = prueba;

    ultimo.classList.remove("bg");
    
    //arrayList.filter(el => el.classList("bg"))
    
    
    console.log(arrayList)
}

takeButton.onclick = function(){
    alert("pulsando TAKE")
}