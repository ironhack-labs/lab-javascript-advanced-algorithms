$(document).ready(function(){

    var allStacks = new StackDataStructure();

    $('.btn-blue').click(function(e){
        if(allStacks.canPush()){
            if(allStacks.isEmpty()){
                $('.first').last().addClass('grey').removeClass('element-flow').html('<p></p>');
            }
            var value = $('.input').val();
            allStacks.stackControl.push(value);            
            $('.grey').last().removeClass('grey').addClass('element').html('<p class=p> ' + value + '</p>');           
        }else{
            $('.last').last().removeClass('grey').addClass('element-flow').html('<p class=flow> Stack Overflow</p>');
        }      
    })

    $('.btn-red').click(function(e){
            var value = $('.input').val();
            if(allStacks.isEmpty()){
                $('.first').removeClass('grey').addClass('element-flow').html('<p class=flow> Stack UnderFlow</p>');
                $('.element').last().addClass('grey').removeClass('element').html('<p></p>');
                
            }else{
                $('.element').first().removeClass('element-flow').addClass('grey').html('<p> </p>');
                allStacks.stackControl.pop(value);
                $('.element').first().addClass('grey').removeClass('element').html('<p></p>');
            }               
    })

})

