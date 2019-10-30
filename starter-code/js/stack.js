const stack = new StackDataStructure();

let inputasion = document.getElementById('inputStack');
let adision = document.getElementById('addStack');
let eliminasion = document.getElementById('takeStack');

let liDOMEL = document.createElement("li");



adision.onclick = function(){
    let inputValue = inputasion.value;
    console.log(inputValue);    
    let fakeArr = [...document.querySelectorAll("list-group-item")]
    fakeArr.push(inputValue);
    console.log(fakeArr);
 

    
}