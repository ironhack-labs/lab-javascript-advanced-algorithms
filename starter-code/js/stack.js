var visualStack = new StackDataStructure();
    
var stackHtml = '';
stackHtml += '<div id="overflow" class="hideflow">';
stackHtml += '<p>Stack overflow!</p>';
stackHtml += '</div>';
for(i = 0; i < visualStack.MAX_SIZE; i++){
    stackHtml += '<div class="stackItem emptyItem">';
    stackHtml += '<p>-</p>';
    stackHtml += '</div>';
};
stackHtml += '<div id="underflow" class="hideflow">';
stackHtml += '<p>Stack underflow!</p>';
stackHtml += '</div>';

$('#stack').append(stackHtml);

var oflow = 0;

$('.stack-add').click(function(){
    oflow = 0;
    visualStack.push($('#stackElement').val());
    updateVisualStack();
});

$('.stack-take').click(function(){
    oflow = 0;
    visualStack.pop();
    updateVisualStack();
});

function updateVisualStack(){
    if(oflow === 0){
        $('#overflow').removeClass('fullflow');
        $('#underflow').removeClass('fullflow');
        for(i = 0; i < visualStack.MAX_SIZE; i++){
            if(visualStack.stackControl[i] != undefined){
                $('.stackItem')[visualStack.MAX_SIZE - 1 - i].innerHTML = visualStack.stackControl[i];
                $('.stackItem')[visualStack.MAX_SIZE - 1 - i].className = ('stackItem filledItem');
            }   
            else{
                $('.stackItem')[visualStack.MAX_SIZE - 1 - i].innerHTML = '-';
                $('.stackItem')[visualStack.MAX_SIZE - 1 - i].className = ('stackItem emptyItem');
            }
        }
    }
    else if(oflow === 1){
        $('#overflow').addClass('fullflow');
    }
    else if(oflow === 2){
        $('#underflow').addClass('fullflow');
    }
}