let stackData = new StackDataStructure();
let stackTiles = $(".stack-tile");
let addStack = $("#add-stack");
let deleteStack = $("#delete-stack");
let stackInput = $("#stack-input");
let stackOver = $('.error-stack.over')
let stackUnder = $('.error-stack.under')

let updateStackTiles = () => {
  for (i = 1; i <= stackTiles.length; i++) {
    if (i <= stackData.stackControl.length) {
      stackTiles.eq(stackTiles.length - i).addClass("stack-item");
      stackTiles.eq(stackTiles.length - i).text(stackData.stackControl[i - 1]);
    } else {
      stackTiles.eq(stackTiles.length - i).removeClass("stack-item");
      stackTiles.eq(stackTiles.length - i).text("");
    }
  }
};

addStack.click(() => {
  if (stackInput.val() !== "") {
    if (stackData.canPush()) {
      stackUnder.removeClass('error-active')
      stackData.push(stackInput.val());
      stackInput.val("");
    } else {
        stackOver.addClass('error-active')
    }
  }
  updateStackTiles();
});

deleteStack.click(() => {
    if(!stackData.isEmpty()) {
        stackOver.removeClass('error-active')
        stackData.pop()
    } else {
        stackUnder.addClass('error-active')
    }
    updateStackTiles();
})
