const stack = new StackDataStructure();

let addEle = document.getElementById('inputStack')
let addBtn = document.getElementById('addStack');
let takeBtn = document.getElementById('takeStack');


addBtn.onclick = function(){
    let elementValue = addEle.value;
    console.log(elementValue);
    let list = [...document.querySelectorAll('list-group-item')]
    console.log(list)
    list.push(elemenValue)
    console.log(list)
}

takeBtn.onclick = function(){
    alert('Gallego muerto, gallego bueno')
}