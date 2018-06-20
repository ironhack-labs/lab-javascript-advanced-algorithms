var addBtn = $('#add');
var takeBtn = $('#take');
var stackOver = $('#overflow');
var stackUnder = $('#underflow');
var stackContainer = $('#stackcontainer');
var input = $('#element-input');
var stackDataStructure = new StackDataStructure();
var queueBtn = $('#queue');

addBtn.click(function() {

  if(stackDataStructure.canPush()){
    var element = input.val();
    stackDataStructure.push(element);
    $('#stackcontainer .stacked-element:last').text(input.val());
    $('#stackcontainer .stacked-element:last').toggleClass('stacked-in').toggleClass('stacked-element');
  }


  if(!stackDataStructure.isEmpty()){
    stackUnder.addClass('hidden');
  }
  if(!stackDataStructure.canPush()){
    stackOver.removeClass('hidden');
  }
  
});

takeBtn.click(function(){
  if(!stackDataStructure.isEmpty()){
    stackDataStructure.pop();
    $('#stackcontainer .stacked-in:first').text('');
    $('#stackcontainer .stacked-in:first').toggleClass('stacked-in').toggleClass('stacked-element');
  } else {
    stackUnder.toggleClass('hidden');
  }

  if(stackDataStructure.isEmpty()){
    stackUnder.removeClass('hidden');
  }
  if(stackDataStructure.canPush()){
    stackOver.addClass('hidden');
  }
});