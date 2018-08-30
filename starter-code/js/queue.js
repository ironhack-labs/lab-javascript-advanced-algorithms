var queueAnadir = $('#add-queue'); //botón añadir
var queueRemover = $('#take-queue'); //botón quitar

//Añadir
queueAnadir.click(function(){ 
    var item=$('#input-queue').val();
    
    if(item !== ''){  
        if(agregaItemQ(item)){
            $('#input-queue').val('');
        }
        else{
            alert('Queue overflow');
        }
    } 
    else{
        alert('Debe introducir un texto')
    }
})

//Quitar
queueRemover.click(function(){
    var elq = parseInt(quitaItemQ());
    if(elq){
        var valq = $('#q-' + elq).html();
        $('#listaQ').append('<li>' + valq + '</li>');

        $('#q-' + elq).html('');
        $('#q-'+ elq).removeClass('active');
    }
    else{
        alert('Queue vacío');
    }
    
})

function agregaItemQ(item) {
    var item1=item;
    for (var i=1; i<9; i++){
        if($('#q-'+ i).html() == false){
            $('#q-' + i).html(item1);
            $('#q-'+ i).addClass('active');
            return true;
        }
    }
}

function quitaItemQ() {
    for (var i=1; i<9; i++){
        if($('#q-'+ i).html() !== ''){
            return i;
        }
    }
}