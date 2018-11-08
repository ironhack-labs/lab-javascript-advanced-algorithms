console.log('queue');

var lifoBtnAdd = document.getElementById('queueAdd');
var lifoInput = document.getElementById('addTextRow');
var lifoRowsFather = document.getElementById('rowsFather');
var lifoBtnDelete = document.getElementById('queueDelete');



lifoBtnAdd.addEventListener('click',function () {
    var lifoRows = document.querySelectorAll('span.card-body.boxRow');
    lifoRowsFather.removeChild(lifoRowsFather.childNodes[0]);
    var spanLifo = document.createElement('span');
    spanLifo.innerText = lifoInput.value;
    spanLifo.classList.add('card-body');
    spanLifo.classList.add('boxRow');
    lifoRowsFather.appendChild(spanLifo);
    
})

lifoBtnDelete.addEventListener('click',function () {
    var lifoRows = document.querySelectorAll('span.card-body.boxRow');
    console.log('borrar');
    for(row of lifoRows){
        console.log(row);
        console.log(row.innerHTML);
        if(row.innerHTML !=''){
            var emptySpanLifo = document.createElement('span');
            emptySpanLifo.classList.add('card-body');
            emptySpanLifo.classList.add('boxRow');
            lifoRowsFather.insertBefore(emptySpanLifo,row);
            lifoRowsFather.removeChild(row);
            break;
        }
    }
});