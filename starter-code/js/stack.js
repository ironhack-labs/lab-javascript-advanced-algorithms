function stackBoxNumToChildDivNum(num){
  return 10 - num;
}

$(document).on('ready', function (){
  console.log('jQuery linked');
  var myStack = new StackDataStructure();

  $('.stack-area > .btn-add').on('click', function (){
    if (!myStack.canPush()){
      alert("STACK OVERFLOW!");
      return; //can't push!
    }

    var stackSz = myStack.stackControl.length;
    var textBoxVal = $('.text-add').val();
    var divNumber = myStack.MAX_SIZE - stackSz;
    var divToModify = $('.stack-element-box:nth-child(' + divNumber + ')');

    myStack.push(textBoxVal);
    divToModify.addClass('filled-element');
  });

  $('.stack-area > .btn-take').on('click', function (){
    if (myStack.isEmpty()){
      alert("STACK UNDERFLOW!");
      return;  //cant take!
    }
    var stackSz = myStack.stackControl.length;
    var divNumber = 11 - stackSz;
    var divToModify = $('.stack-element-box:nth-child(' + divNumber + ')');

    myStack.pop();
    divToModify.removeClass('filled-element');
  });
});
