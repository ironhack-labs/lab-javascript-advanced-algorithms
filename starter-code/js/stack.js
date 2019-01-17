$('.grey-div').addClass('free');


$('.take').on('click', function(){
    var stacks = $('.stacks');
    var index = $('.free').length;
    var occupied = $(".grey-div:not(.free)");
    $('.stack-over-flow').text("");
    
    if (occupied.length > 0){ 
        var toRemove = index +1;
        $('.stacks div:nth-child('+toRemove+')').css('background-color', 'grey');
        var text = $('.input1').val();
        $('.stacks div:nth-child('+toRemove+')').text(text);
        $('.stacks div:nth-child('+toRemove+')').toggleClass('free');
        $('.add').css('pointer-events', 'auto'); 
    }
    else{ 
        $('.container').append('<div class="stack-under-flow">STACKUNDERFLOW</div>');
        $('.take').css('pointer-events', 'none'); 
    }   
});


$('.add').on('click', function(){
    var index = $('.free').length;
    if(index < 1){
        var stackOverF = '<div class="stack-over-flow">STACKOVERFLOW</div>'
        $(stackOverF).insertAfter($('.take'));
        $('.add').css('pointer-events', 'none');
    }
    else{
        $('.stack-under-flow').text("");
        $('.free').last().css('background-color', 'green');
        $('.free').last().toggleClass("free");
        $('.take').css('pointer-events', 'auto'); 
    }
});
