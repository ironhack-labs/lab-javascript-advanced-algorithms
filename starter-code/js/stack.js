
var stackAdd = $('#add-stack')
var stackTake = $('#take-stack')
var stack = new StackDataStructure()

stackAdd.click(function(){
    var item = $('#big-stack > input')
    console.log("item")
    if(item.val()!==''){
    stack.push(item.val())
    updateStacks ()
    item.val('')
    $("#s-underflow").addClass("invisible")
} 

if(stack.canPush()== false){
    $("#s-overflow").removeClass("invisible")
}
else{
    $("#s-overflow").addClass("invisible")
}
    
   
})

stackTake.click(function(){
    var message = stack.pop()
    updateStacks ()
    $("#s-overflow").addClass("invisible")
    if(message==="Stack Underflow"){
        $("#s-underflow").removeClass("invisible")
    }
    else{
        $("#s-underflow").addClass("invisible")
    }
})

function updateStacks(){
    
    for(var i = 0; i<8; i++){
        if(i>=stack.stackControl.length){
            $('#s-'+(i+1)).html(" ")                
        }else{
            $('#s-'+(i+1)).html(stack.stackControl[i])                
        }
        
        if($('#s-'+(i+1)).html() !== ' '){
            $('#s-'+(i+1)).addClass('active')
        }else{
        $('#s-'+(i+1)).removeClass('active')
        $('#s-'+(i+1)).html(" ")                
        }
    }
}
