

let stackDivs = new StackDataStructure(10);

for(let i=0; i<stackDivs.MAX_SIZE; i++){
  $('#stack-btn').after('<div class="info"><span></span></div>');
}

let inputStack = $('.info');

//PUSH (ADD) TO STACK
$('#stack-add').click(function(){
    if(stackDivs.stackControl.length == stackDivs.MAX_SIZE && !$('.stack-div div:first').hasClass('overflow')){
      $('#stack-btn').after('<div class="overflow">STACK OVERFLOW</div>');
    }
    if(stackDivs.stackControl.length == 0){
      $('.underflow').hide();
    }

   stackDivs.push($('.stack-input').val());
 
   $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length]).children()[0].innerText = $('.stack-input').val();
   $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length]).css('background-color', 'yellow');
});


//POP (TAKE) FROM STACK
$('#stack-btn').click(function(){
  if(stackDivs.stackControl.length == stackDivs.MAX_SIZE){
    $('.overflow').hide();
  }
  if(stackDivs.stackControl.length == 0 && !$('.stack-div div:last').hasClass('underflow')){
    $('.info').last().after('<div class="underflow">STACK UNDERFLOW</div>');
  }
  stackDivs.pop();
  $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length -1]).children()[0].innerText = "";
  $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length -1]).css('background-color', 'lightgray');
});
