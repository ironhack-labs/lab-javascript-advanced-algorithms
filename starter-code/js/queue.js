var addBtn = $('#add');
var takeBtn = $('#take');
var stackOver = $('#overflow');
var stackUnder = $('#underflow');
var elementList = $('#stackcontainer > div');
var queuedElement = $('.queued-element');
var input = $('#element-input');
var queueBtn = $('#queue');
var queueStructure = new QueueDataStructure();

queueBtn.click(function(){
  elementList.toggleClass('stacked-element').toggleClass('queued-element');
  addBtn.removeAttr('id');
  addBtn.attr('id', 'add-queue');
  takeBtn.removeAttr('id');
  takeBtn.attr('id', 'take-queue');
});

$('body').on('click', '#add-queue', function() {
  if(queueStructure.canEnqueue()){
    var element = input.val();
    queueStructure.enqueue(element);
    $('#stackcontainer .queued-element:first').text(input.val());
    $('#stackcontainer .queued-element:first').toggleClass('stacked-in').toggleClass('queued-element');
  }
  if(!queueStructure.isEmpty()){
    stackUnder.addClass('hidden');
  }
  if(!queueStructure.canEnqueue()){
    stackOver.removeClass('hidden');
  }
});

$('body').on('click', '#take-queue', function() {
  if(!queueStructure.isEmpty()){
    queueStructure.dequeue();
    $('#stackcontainer .stacked-in:first').text('');
    $('#stackcontainer .stacked-in:first').toggleClass('stacked-in').toggleClass('queued-element');
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