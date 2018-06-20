var addBtn = $('#add');
var takeBtn = $('#take');
var stackOver = $('#overflow');
var stackUnder = $('#underflow');
var stackElement = $('.stacked-element');
var input = $('#element-input');

var queueStructure = new QueueDataStructure();

addBtn.click(function() {

  if(queueStructure.canEnqueue()){
    var element = input.val();
    queueStructure.enqueue(element);
    $('#stackcontainer .stacked-element:last').text(input.val());
    $('#stackcontainer .stacked-element:last').toggleClass('stacked-in').toggleClass('stacked-element');
  }


  if(!queueStructure.isEmpty()){
    stackUnder.addClass('hidden');
  }
  if(!queueStructure.canEnqueue()){
    stackOver.removeClass('hidden');
  }
  
});

takeBtn.click(function(){
  if(!queueStructure.isEmpty()){
    queueStructure.dequeue();
    $('#stackcontainer .stacked-in:first').text('');
    $('#stackcontainer .stacked-in:first').toggleClass('stacked-in').toggleClass('stacked-element');
  } else {
    stackUnder.toggleClass('hidden');
  }

  if(queueStructure.isEmpty()){
    stackUnder.removeClass('hidden');
  }
  if(queueStructure.canEnqueue()){
    stackOver.addClass('hidden');
  }
});