var stackAnadir = $('#add-stack')
var stackRemover = $('#take-stack')
var constructora = new StackDataStructure()

stackAnadir.click(function(){
    var item = $('#input-stack')
    if(item.val()!==''){
    constructora.push(item.val())
    updateStacks ()
    item.val('')
    } 
   
})

stackRemover.click(function(){
    constructora.pop()
    updateStacks ()
    
})

function updateStacks(){
    for(var j=0; j<8;j++){
        if(j>constructora.stackControl.length){
            $('#s-'+(j+1)).html(" ")
        }else{
        $('#s-'+(j+1)).html(constructora.stackControl[i])
        }
    }

    for(var i = 0; i<constructora.stackControl.length; i++){
        if($('#s-'+(i+1)) !== ' '){
            $('#s-'+(i+1)).addClass('active')
        }else{
            $('#s-'+(i+1)).removeClass('active')
        }
    }
    console.log(constructora.stackControl)
}
