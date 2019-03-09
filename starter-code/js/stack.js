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
    alerta.innerHTML = '';
    let value = document.querySelector('.input-stack').value;
    if(stack.push(value) == "Stack Overflow"){
        alerta.innerHTML = '<h3>Stack Overflow!</h3>'
    };
    updateTable();
});

var alerta = document.querySelector('.alerta');

takeBtn.addEventListener('click', function(){
    alerta.innerHTML = '';
    trs = document.querySelectorAll('tr');
    if (stack.pop() == 'Stack Underflow'){
        alerta.innerHTML = '<h3>Stack Underflow!</h3>'
    }
    
    updateTable();
});
