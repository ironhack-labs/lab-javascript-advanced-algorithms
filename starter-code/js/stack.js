

// let btnAdd = document.getElementById('add');
// let button = document.getElementById("add-item-button");

// button.onclick = function(){
//   console.log("adding an element to the list");
// }

let inputValor = document.getElementById("input_num")
let btnAdd2 = document.getElementById("add")
let btnTake2 = document.getElementById("take")
let divGris = document.getElementsByClassName("boxes")
let stack = new StackDataStructure()
let posicion = stack.MAX_SIZE-1
let underflow = document.getElementById("underflow")
let overflow = document.getElementById("overflow")

btnAdd2.onclick = function(){
    let valorI = inputValor.value
     stack.push(valorI)
    if(stack.canPush()){
        divGris[posicion--].innerHTML = valorI
    }
    else{
        overflow.innerHTML = 'Stack Overflow'
        overflow.style.display= "block"
    }
}

btnTake2.onclick = function(){
    let valorI = inputValor.value
     stack.pop(valorI)
    if(!stack.isEmpty()){
        stack.pop()
        divGris[posicion--].innerHTML = ""
        console.log(posicion)
    }
    else{
        underflow.innerHTML = 'Stack Underflow'
        divGris[posicion].innerHTML = valorI
    }
}
