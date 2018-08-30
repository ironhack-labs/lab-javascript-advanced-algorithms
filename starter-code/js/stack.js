var stackAnadir = $('#add-stack')
var stackRemover = $('#take-stack')
var constructora = new StackDataStructure()

stackAnadir.click(function(){
    var item = $('#input-stack')
    if(item.val()!==''){
    constructora.push(item.val())
    updateStacks ()
    item.val('')
    $("#s-underflow").addClass("invisible")
} 
if(constructora.canPush()== false){
    $("#s-overflow").removeClass("invisible")
}
else{
    $("#s-overflow").addClass("invisible")
}
    
   
})

stackRemover.click(function(){
    constructora.pop()
    updateStacks ()
    $("#s-overflow").addClass("invisible")
    if(constructora.isEmpty()== true){
        $("#s-underflow").removeClass("invisible")
    }
    else{
        $("#s-underflow").addClass("invisible")
    }
})

function updateStacks(){
    
    for(var i = 0; i<8; i++){
        if(i>=constructora.stackControl.length){
            $('#s-'+(i+1)).html(" ")                
        }else{
            $('#s-'+(i+1)).html(constructora.stackControl[i])                
        }
        
        if($('#s-'+(i+1)).html() !== ' '){
            $('#s-'+(i+1)).addClass('active')
        }else{
        $('#s-'+(i+1)).removeClass('active')
        $('#s-'+(i+1)).html(" ")                
        }
    }
}
