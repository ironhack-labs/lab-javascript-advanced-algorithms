var stack = new StackDataStructure();

// Init
sizeOfStacks();
addStack();
takeStack();

// Functions
function sizeOfStacks() {
  for (var i = stack.MAX_SIZE; i > 0; i--) {
    $('#stacks').append('<div id="' + i + '"class="stack"></div>');
  }
}

var count = 1;
var stack1 = $('#stacks #' + count);
var nextStack = '';
var currentStack = '';

function addStack() {

  $('#add-stack').on('click', function() {

    if (stack.isEmpty()) {
      // console.log(stack1);
      stack.push(stack1);
      nextStack = stack1;
      count++;

      if (currentStack !== '') {
        count = currentStack.attr('id');
        currentStack.addClass('stackAdded');
      } else {
        nextStack.addClass('stackAdded');
      }

    } else if (stack.canPush()) {
      nextStack = $('#stacks #' + count);
      stack.push(nextStack);
      if (currentStack !== '') {
        currentStack.addClass('stackAdded');
        var id = currentStack.attr('id');
        id++;
        currentStack = $('#stacks #' + id);
      } else {
        nextStack.addClass('stackAdded');
      }
      count++;

    } else {
      console.log('Stack Overflow');
    }

    // return nextStack;

  });


}


function takeStack() {

  $('#take-stack').on('click', function() {
    var count2 = nextStack.attr('id');
    currentStack = $('#stacks #' + count2);

    if (!stack.isEmpty()) {
      stack.pop();
      nextStack.removeClass('stackAdded');
      // console.log('currentstack',nextStack, 'count: ',count);
      count2--;
      nextStack = $('#stacks #' + count2);
      console.log('nextstack', nextStack);

    } else {
      nextStack.removeClass('stackAdded');
    }

  });
}
