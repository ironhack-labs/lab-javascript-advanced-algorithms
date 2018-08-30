var queueAnadir = $('#add-queue')
var queueRemover = $('#take-queue')
var contruQ = new QueueDataStructure()

queueAnadir.click(function(){
    var item = $('#input-queue')
    if(item.val()!==''){
    contruQ.enqueue(item.val())
    updatequeues()
    item.val('')
    $("#q-underflow").addClass("invisible")
    } 
    if(contruQ.canEnqueue()== false){
        $("#q-overflow").removeClass("invisible")
    }
    else{
        $("#q-overflow").addClass("invisible")
    }
})

queueRemover.click(function(){
    contruQ.dequeue()
    updatequeues()
    $("#q-overflow").addClass("invisible")
    if(contruQ.isEmpty()== true){
        $("#q-underflow").removeClass("invisible")
    }
    else{
        $("#q-underflow").addClass("invisible")
    }
})

function updatequeues(){
    
    for(var i = 0; i<8; i++){
        if(i>=contruQ.queueControl.length){
            $('#q-'+(i+1)).html(" ")                
        }else{
            $('#q-'+(i+1)).html(contruQ.queueControl[i])                
        }
        
        if($('#q-'+(i+1)).html() !== ' '){
            $('#q-'+(i+1)).addClass('active')
        }else{
        $('#q-'+(i+1)).removeClass('active')
        $('#q-'+(i+1)).html(" ")                
        }
    }
}
