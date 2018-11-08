var stackMeter = $("#metestack")
var stackSacar = $("#sacastack")
var constructora = new StackDataStructure()
 stackMeter.click(function(){
    var palabrita = $("#inputstack")
    if(palabrita.val()!==''){
    constructora.push(palabrita.val())
     updateStacks ()
    palabrita.val('')
    $("#s-underflow").addClass("vacios")
} 
if(constructora.canPush()== false){
    $("#s-overflow").removeClass("vacios")
}
else{
    $("#s-overflow").addClass("vacios")
}
    
   
})
 stackSacar.click(function(){
    constructora.pop()
     updateStacks ()
    $("#s-overflow").addClass("vacios")
    if(constructora.isEmpty()== true){
        $("#s-underflow").removeClass("vacios")
    }
    else{
        $("#s-underflow").addClass("vacios")
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
            $('#s-'+(i+1)).addClass('lleno')
        }else{
        $('#s-'+(i+1)).removeClass('lleno')
        $('#s-'+(i+1)).html(" ")                
        }
    }
}