let StackData = new StackDataStructure();
let stack = document.querySelector(`.list`);
let add = document.querySelector(`.add`);
let deleter = document.querySelector(`.delete`);
let valor = ``;
let newli= ``;

createStack();
function createStack() {
  let stack = document.querySelector(`.list`);
  for (i = 0; i < StackData.MAX_SIZE; i++) {
    newli = document.createElement(`li`);
    newli.classList.add(`no`);
   stack.appendChild(newli);
}
}


// StackData.push(valor.value)
add.addEventListener("click", ()=>{newNumber()} )
deleter.addEventListener(`click`, ()=>{out()})




function newNumber(){
    if(StackData.canPush()){
        valor = document.querySelector(`.text`).value;
        newli = document.querySelectorAll(".no");
        newli[newli.length - 1].innerHTML = valor;
        newli[newli.length - 1].classList.remove("no");
        newli[newli.length - 1].classList.add("yes");
        StackData.push(newli);      
    } else {
        alert ("Honde vaaa!!!")
    }
}






function out(){
    if(StackData.isEmpty()){
       alert (`No puedes quitar mas`)
    } else {
        valor = document.querySelector(`.text`);
        newli = document.querySelectorAll(".yes");
        
        newli[newli.length].classList.add("no");
        newli[newli.length].classList.remove("yes");
        StackData.pop(newli);      
    }

}






  