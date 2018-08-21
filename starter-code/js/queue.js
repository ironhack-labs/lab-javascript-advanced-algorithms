$(document).ready(function(){
    
    var queueDataStructure = new QueueDataStructure;
    
    function queueAdapter(){
        queueDataStructure.queueControl.forEach(function(element, index){
            var auxIndex;      
            auxIndex = index + 10-queueDataStructure.queueControl.length;
            $('.queue-element')[auxIndex].innerText = element;
            $('.queue-element')[auxIndex].className = "queue-element queue-added-item";
        });        
        for(i=0; i<10-queueDataStructure.queueControl.length; i++){
            $('.queue-element')[i].innerText = '';
            $('.queue-element')[i].className = "queue-element"; 
        }            
    }

    $('#add-queue').click(function(){
        if (queueDataStructure.enqueue($('#queue-input')[0].value) === "Queue Overflow"){
            $('#eqo').addClass('showerr');
        } else {
            $('#eqo').removeClass('showerr');
            $('#equ').removeClass('showerr');
        }        
        queueAdapter();
    });

    $('#delete-queue').click(function(){
        if(queueDataStructure.dequeue() === 'Queue Underflow'){
            $('#equ').addClass('showerr');
        } else {
            $('#eqo').removeClass('showerr');
            $('#equ').removeClass('showerr');
        }
        queueAdapter();
    });
});