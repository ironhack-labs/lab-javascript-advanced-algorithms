let stack = new StackDataStructure();

let table = document.querySelector('table');
let addBtn = document.querySelector('.add-btn');
let takeBtn = document.querySelector('.take-btn');


function cleanTable() {
    table.innerHTML = '';
}

function updateTable() {

    cleanTable();
    stack.stackControl.forEach( function (item){
        let td = document.createElement('td');
        td.textContent = item;
        let tr = document.createElement('tr');
        tr.appendChild(td);
        table.appendChild(tr);
    });
}


addBtn.addEventListener('click', function(){
    let value = document.querySelector('.input-stack').value;
    stack.push(value);
    updateTable();
    console.log(stack);
});


takeBtn.addEventListener('click', function(){
    trs = document.querySelectorAll('tr');
    stack.pop();
    updateTable();
    console.log(stack.stackControl)
});
