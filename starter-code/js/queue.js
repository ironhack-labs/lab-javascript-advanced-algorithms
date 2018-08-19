$(function() {

  // create Queue
  const queue = new QueueDataStructure();
  // const queueControl Array
  const arrayQ = queue.queueControl;
  
  // create queues array
  var queueDivs = $.map( $('.queue-element') , function(item) { return item; });

  function addQueue() { // function for input Enter keypress && 'QUEUE' button click
    queue.enqueue($('#queue-input').val()); // add to arrayQ
    console.log(arrayQ);
    
    for (let i = 0; i < 10; i++) { // insert input value on HTML div
      if (arrayQ[0] !== undefined) {
         $(queueDivs[i]).html(arrayQ[i]); 
      }
    }
    
    if (queue.isEmpty() === false) { $('.error-queue.under').fadeOut(250); } // arrayQ not empty => hide HTML 'Queue Underflow'
    
    if (queue.canEnqueue() === false) { $('.error-queue.over').fadeIn(250); } // MAX_SIZE reached => show HTML 'Queue Overflow'
    
    return $('#queue-input').val(''); // reset input values
  } /*** END addQueue ***/
  
  $('#queue-input').keypress( e => { // on input Enter keypress
    if (e.which == 13 && $('#queue-input').val() !== '') return addQueue();
  });
  
  $('#add-queue').click( () => { // on 'QUEUE' button click
    if ($('#queue-input').val() !== '') addQueue();
    return $('#queue-input').focus();
  });
  
  $('#delete-queue').click(() => { // on 'REMOVE' button click
    let last = arrayQ.length - 1; // Remove last arrayQ item, and remove empty slot
    if (last >= 0) {
      delete arrayQ[last];
      arrayQ.length = last;
    }

    console.log(arrayQ);

    for (let i = 9, j = 0; j < 10; i--, j++) { // remove input value on HTML div
      if (arrayQ[j] === undefined) { $(queueDivs[j]).html(''); }
    }

    if (queue.canEnqueue() === true) { $('.error-queue.over').fadeOut(250); } // arrayS not full => hide 'Stack Overflow'

    if (queue.isEmpty() === true) { $('.error-queue.under').fadeIn(250) } // arrayS empty => show 'Stack Underflow'

    return $('#queue-input').focus();
  });
  
});