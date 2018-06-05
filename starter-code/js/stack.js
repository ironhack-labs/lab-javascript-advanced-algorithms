var stack;

$(document).ready(function(){
  stack = new StackDataStructure();
  stack.MAX_SIZE = document.querySelectorAll('.stack .empty').length;
});

$('.stack .btn-add').on('click', function(){
  var positions = document.querySelectorAll('.stack .empty');   
  element = document.querySelector('.stack .element').value;
  if(stack.push(element)!='Stack Overflow')
  {
    positions[positions.length-1].classList.add('full');
    positions[positions.length-1].innerHTML = element;
    positions[positions.length-1].classList.remove('empty');
    $('.stack .overflow').css('display', 'none');
    $('.stack .underflow').css('display', 'none');
    $('.stack .taken').text('');
  }
  else
  {
    $('.stack .overflow').css('display', 'block');
    $('.stack .underflow').css('display', 'none');
    $('.stack .taken').text('');
  }
});

$('.stack .btn-take').on('click', function(){
  var positions = document.querySelectorAll('.stack .full');
  var taken = stack.pop();
  if(taken!='Stack Underflow')
  {
    positions[0].classList.add('empty');
    positions[0].innerHTML = "";
    positions[0].classList.remove('full');
    $('.stack .overflow').css('display', 'none');
    $('.stack .underflow').css('display', 'none');
    $('.stack .taken').text(taken);
  }
  else
  {
    $('.stack .overflow').css('display', 'none');
    $('.stack .underflow').css('display', 'block');
    $('.stack .taken').text('');
  }
});
