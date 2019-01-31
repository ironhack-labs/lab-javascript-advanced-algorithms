
let testStack = new StackDataStructure(4);

for(let i = 0; i < testStack.MAX_SIZE; i++){
$('#pop-stack').after(`<div><span></span></div>`);
}

let divStackArray = $('#stack div');

$('#push-stack').click(() => {
  //Add OVERFLOW if an attempt is made to push and there is no more room to push
  if(testStack.MAX_SIZE == testStack.stackControl.length && !$('#stack div:first').hasClass('overflow')){
    $('#pop-stack').after(`<div class="overflow"><span>STACK OVERFLOW</span></div>`);
  }
  //Remove UNDERFLOW if it exists
  if($('#stack div:last').hasClass('underflow')){
    $('#stack div:last').remove();
  } 
  testStack.push($('#value-stack').val());
  $(divStackArray[testStack.MAX_SIZE - testStack.stackControl.length]).children()[0].innerText = $('#value-stack').val();
});

$('#pop-stack').click(() => {
  //Remove OVERFLOW if it exists
  if($('#stack div:first').hasClass('overflow')){
    $('#stack div:first').remove();
  }
  //Add UNDERFLOW if there is nothing left to pop and an attempt is made to pop
  if(testStack.stackControl.length == 0 && !$('#stack div:last').hasClass('underflow')){
    $('#stack div:last').after(`<div class="underflow"><span>STACK UNDERFLOW</span></div>`);
  }

  testStack.pop();
  $(divStackArray[testStack.MAX_SIZE - testStack.stackControl.length - 1]).children()[0].innerText = "";
});

