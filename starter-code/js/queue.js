var queue;

$(document).ready(function(){
  queue = new QueueDataStructure();
  queue.MAX_SIZE = document.querySelectorAll('.queue .empty').length;
});

$('.queue .btn-add').on('click', function(){
  var positions = document.querySelectorAll('.queue .empty');   
  element = document.querySelector('.queue .element').value;
  if(queue.enqueue(element)!='Queue Overflow')
  {
    positions[positions.length-1].classList.add('full');
    positions[positions.length-1].innerHTML = element;
    positions[positions.length-1].classList.remove('empty');
    // $('.queue .message').text('');
    $('.queue .overflow').css('display', 'none');
    $('.queue .underflow').css('display', 'none');
    $('.queue .taken').text('');
  }
  else
  {
    // $('.queue .message').text('not enough space in the queue');
    $('.queue .overflow').css('display', 'block');
    $('.queue .underflow').css('display', 'none');
    $('.queue .taken').text('');
  }
});

$('.queue .btn-take').on('click', function(){
  var positions = document.querySelectorAll('.queue .full');
  var dequeued = queue.dequeue();
  if(dequeued!='Queue Underflow')
  {
    positions = document.querySelectorAll('.queue .full');
    for (var i=positions.length-2; i>=0; i--)
    {
      positions[i+1].innerHTML=positions[i].innerHTML;
    }
    positions[0].classList.add('empty');
    positions[0].classList.remove('full');
    positions[0].innerHTML = '';
    // $('.queue .message').text('');
    $('.queue .overflow').css('display', 'none');
    $('.queue .underflow').css('display', 'none');
    $('.queue .taken').text(dequeued);
  }
  else
  {
    // $('.queue .message').text('no elements in the queue');
    $('.queue .overflow').css('display', 'none');
    $('.queue .underflow').css('display', 'block');
    $('.queue .taken').text('');
  }
});
