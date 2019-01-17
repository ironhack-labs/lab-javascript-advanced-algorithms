var visualQueue = new QueueDataStructure();
    
var queueHtml = '';
queueHtml += '<div id="qoverflow" class="hideflow">';
queueHtml += '<p>Stack overflow!</p>';
queueHtml += '</div>';
for(i = 0; i < visualQueue.MAX_SIZE; i++){
    queueHtml += '<div class="queueItem emptyItem">';
    queueHtml += '<p>-</p>';
    queueHtml += '</div>';
};
queueHtml += '<div id="qunderflow" class="hideflow">';
queueHtml += '<p>Stack underflow!</p>';
queueHtml += '</div>';

$('#queue').append(queueHtml);

var qflow = 0;

$('.queue-add').click(function(){
    qflow = 0;
    visualQueue.enqueue($('#queueElement').val());
    updateVisualQueue();
});

$('.queue-take').click(function(){
    qflow = 0;
    visualQueue.dequeue();
    console.log(visualQueue.queueControl);
    updateVisualQueue();
});

function updateVisualQueue(){
    if(qflow === 0){
        $('#qoverflow').removeClass('fullflow');
        $('#qunderflow').removeClass('fullflow');
        console.log(visualQueue.queueControl);
        for(let i = 0; i < visualQueue.MAX_SIZE; i++){
            $('.queueItem')[i].innerHTML = '-';
            $('.queueItem')[i].className = ('queueItem emptyItem');
        }
        for(let i = 0; i < visualQueue.MAX_SIZE; i++){
            if(visualQueue.queueControl[i] != undefined){
                $('.queueItem')[i + visualQueue.MAX_SIZE - visualQueue.queueControl.length].innerHTML = visualQueue.queueControl[i];
                $('.queueItem')[i + visualQueue.MAX_SIZE - visualQueue.queueControl.length].className = ('queueItem filledItem');
            }   
        }
    }
    else if(qflow === 1){
        $('#qoverflow').addClass('fullflow');
    }
    else if(qflow === 2){
        $('#qunderflow').addClass('fullflow');
    }
}