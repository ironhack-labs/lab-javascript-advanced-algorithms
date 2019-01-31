

let stackDivs = new StackDataStructure(10);

for(let i=0; i<stackDivs.MAX_SIZE; i++){
  $('#stack-btn').after('<div class="info"><span></span></div>');
}

let inputStack = $('.info');

//PUSH (ADD) TO STACK
$('#stack-add').click(function(){
   stackDivs.push($('.stack-input').val());
 
   $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length]).children()[0].innerText = $('.stack-input').val();
   $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length]).css('background-color', 'yellow');
});


//POP (TAKE) FROM STACK
$('#stack-btn').click(function(){
  stackDivs.pop();

  $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length -1]).children()[0].innerText = "";
  $(inputStack[stackDivs.MAX_SIZE - stackDivs.stackControl.length -1]).css('background-color', 'lightgray');
});
