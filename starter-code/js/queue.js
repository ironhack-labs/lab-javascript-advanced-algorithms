var queueAdd = $('#add-queue')
var queueTake = $('#take-queue')
var queue = new QueueDataStructure()

queueAdd.click(function(){
    var item = $('#big-queue > input')
    if(item.val()!==''){
    queue.enqueue(item.val())
    updatequeues()
    item.val('')
    $("#q-underflow").addClass("invisible")
    } 
    if(queue.canEnqueue()== false){
        $("#q-overflow").removeClass("invisible")
    }
    else{
        $("#q-overflow").addClass("invisible")
    }
})

queueTake.click(function(){
    var message = queue.dequeue()
    updatequeues()
    $("#q-overflow").addClass("invisible")
    if(message === "Queue Underflow"){
        $("#q-underflow").removeClass("invisible")
    }
    else{
        $("#q-underflow").addClass("invisible")
    }
})

function updatequeues(){
    
    for(var i = 0; i<8; i++){
        if(i>=queue.queueControl.length){
            $('#q-'+(i+1)).html(" ")                
        }else{
            $('#q-'+(i+1)).html(queue.queueControl[i])                
        }
        
        if($('#q-'+(i+1)).html() !== ' '){
            $('#q-'+(i+1)).addClass('active')
        }else{
        $('#q-'+(i+1)).removeClass('active')
        $('#q-'+(i+1)).html(" ")                
        }
    }
}