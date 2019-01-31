
let testStack = new StackDataStructure(10);

for(let i = 0; i < testStack.MAX_SIZE; i++){
  $('#pop-stack').after(`<div><span></span></div>`);
}

let divArray = $('#stack div');

$('#push-stack').click(() => {
  testStack.push($('#value-stack').val());
  $(divArray[testStack.MAX_SIZE - testStack.stackControl.length]).children()[0].innerText = $('#value-stack').val();
});

$('#pop-stack').click(() => {
  testStack.pop();
  $(divArray[testStack.MAX_SIZE - testStack.stackControl.length - 1]).children()[0].innerText = "";
});


