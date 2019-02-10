
let testQueue = new QueueDataStructure(4);

for(let i = 0; i < testQueue.MAX_SIZE; i++){
  console.log(i);
$('#dequeue-queue').after(`<div><span></span></div>`);
}

let divQueueArray = $('#queue div span');

$('#enqueue-queue').click(() => {
  //Add OVERFLOW if an attempt is made to enqueue and there is no more room to enqueue
  if(testQueue.MAX_SIZE == testQueue.queueControl.length && !$('#queue div:first').hasClass('overflow')){
    $('#dequeue-queue').after(`<div class="overflow"><span>QUEUE OVERFLOW</span></div>`);
  }
  //Remove UNDERFLOW if it exists
  if($('#queue div:last').hasClass('underflow')){
    $('#queue div:last').remove();
  } 
  

  //Move each queue val down one divQueueArray index and add the new enqueued value to the last index of divQueueArray
  if(testQueue.queueControl.length != testQueue.MAX_SIZE){
    for(let i = 0; i < testQueue.queueControl.length; i++){
      divQueueArray[testQueue.MAX_SIZE - 2 - i].innerText = testQueue.queueControl[i];
    }
  }
  testQueue.enqueue($('#value-queue').val());
  divQueueArray[testQueue.MAX_SIZE - 1].innerText = $('#value-queue').val();
});

$('#dequeue-queue').click(() => {
  //Remove OVERFLOW if it exists
  if($('#queue div:first').hasClass('overflow')){
    $('#queue div:first').remove();
  }
  //Add UNDERFLOW if there is nothing left to pop and an attempt is made to pop
  if(testQueue.queueControl.length == 0 && !$('#queue div:last').hasClass('underflow')){
    $('#queue div:last').after(`<div class="underflow"><span>QUEUE UNDERFLOW</span></div>`);
  }
  testQueue.dequeue();
  divQueueArray[testQueue.MAX_SIZE - testQueue.queueControl.length - 1].innerText = "";
  
});
