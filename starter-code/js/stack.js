let theStack = new StackDataStructure();
function addToStack(){
  let index = 0;
  theStack.stackControl.forEach((theDiv)=>{
    if($('.stacker:eq(${index})').hasClass('filled')){
      index++;
    }else{
    $(`.stacker:eq(${index})`).text(theDiv);
    $(`.stacker:eq(${index})`).addClass('filled').removeClass('not-filled')
    index++;
  }
  })
}
function removeStack(){
  $( ".filled" ).last().text("");
  $( ".filled" ).last().addClass('not-filled').removeClass('filled');
}
function addToThisRemovedList(value){
  $('#removed-list').append(`<li>${value}</li>`)
}

$('#stack-take').click(function(){
  if(theStack.isEmpty()){
    $('#cant-pull').toggle();
  }else{
  let userVal = theStack.pop();
  removeStack();
  addToThisRemovedList(userVal);
  }
})

$('#stack-add').click(function (){
  if(theStack.canPush()){
  let userVal = $('#stack-input').val();
  theStack.push(userVal);
  addToStack();
  }else{
    $('#cant-push').toggle();
  }
})

