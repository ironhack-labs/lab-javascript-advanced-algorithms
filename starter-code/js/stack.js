var stackAnadir = $('#add-stack'); //botón añadir
var stackRemover = $('#take-stack'); //botón quitar

//Añadir
stackAnadir.click(function(){ 
    var item=$('#input-stack').val();
    
    if(item !== ''){  
        if(agregaItem(item)){
            $('#input-stack').val('');
        }
        else{
            //$('#s-1').addClass('overflow');
            alert('STACK OVERFLOW')
        }
    } 
    else{
        alert('Debe introducir un texto')
    }
})

//Quitar
stackRemover.click(function(){
    var el = parseInt(quitaItem());
    if(el){
        var val = $('#s-' + el).html();
        $('#listaS').append('<li>' + val + '</li>');
        $('#s-' + el).html('');
        $('#s-'+ el).removeClass('active');
    }
    else{
        alert('STACK UNDERFLOW')
        //$('#s-8').removeClass('overflow');
    }
    
})

function agregaItem(item) {
    var item1=item;
    for (var i=8; i>0; i--){
        
            if($('#s-'+ i).html() == false){
                $('#s-' + i).html(item1);
                $('#s-'+ i).addClass('active');
                return true;
            }
    }
}

function quitaItem() {
    for (var i=1; i<9; i++){
        if($('#s-'+ i).html() !== ''){
            return i;
        }
    }
}