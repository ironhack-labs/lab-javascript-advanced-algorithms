console.log('stack');

var btnAdd = document.getElementById('fifoAdd');
var input = document.getElementById('addTextColumn');
var rows = document.querySelectorAll('span.card-body.box');
var rowsFather = document.getElementById('columsFather');
var btnDelete = document.getElementById('fifoDelete');
console.log(rows);
console.log(rows[0]);


btnAdd.addEventListener('click',function () {
    rowsFather.removeChild(rowsFather.childNodes[0]);
    var span = document.createElement('span');
    span.innerText = input.value;
    span.classList.add('card-body');
    span.classList.add('box');
    rowsFather.appendChild(span);
})

btnDelete.addEventListener('click',function () {
    var rows = document.querySelectorAll('span.card-body.box');
    console.log('borrar');
    for(row of rows){
        console.log(row);
        console.log(row.innerHTML);
        if(row.innerHTML !=''){
            var rowsFather = document.getElementById('columsFather');
            var emptySpanLifo = document.createElement('span');
            emptySpanLifo.classList.add('card-body');
            emptySpanLifo.classList.add('box');
            rowsFather.insertBefore(emptySpanLifo,row);
            rowsFather.removeChild(row);
            break;
        }
    }
});