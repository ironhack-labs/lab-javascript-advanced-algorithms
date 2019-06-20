let theQueue = new QueueDataStructure();
function addToQueue(){
  let index = 0;
  theQueue.queueControl.forEach((theDiv)=>{
    if($('.queued:eq(${index})').hasClass('filled')){
      index++;
    }else{
    $(`.queued:eq(${index})`).text(theDiv);
    $(`.queued:eq(${index})`).addClass('filled').removeClass('not-filled')
    index++;
  }
  })
}

function removeQueue(){
  $( ".filled" ).last().text("");
  $( ".filled" ).last().addClass('not-filled').removeClass('filled');
}
function addToRemovedList(value){
  $('#removed-list-queue').append(`<li>${value}</li>`)
}

$('#queue-take').click(function(){
  if(theQueue.isEmpty()){
    $('#cant-dequeue').toggle();
  }else{
  let userVal = theQueue.dequeue();
  removeQueue();
  addToRemovedList(userVal);
  }
})

$('#queue-add').click(function (){
  if(theQueue.canEnqueue()){
  let userVal = $('#queue-input').val();
  theQueue.enqueue(userVal);
  addToQueue();
  }else{
    $('#cant-enqueue').toggle();
  }
})