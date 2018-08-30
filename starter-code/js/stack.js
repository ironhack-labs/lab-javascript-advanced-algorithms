stack = new StackDataStructure()

$items = $("#stack > .item")

function stackoverflow() {
  $items[0].append("Stack Overflow!");
  $items[0].toggleClass("alert alert-danger")
}

$("#stack .btn-danger").on("click", function () {
  if ($("#stack input").val() != "") {
    newItem = $("#stack input").val()
    newStack = stack.push(newItem)
    if (newStack == "Stack Overflow") {
      stackoverflow()
    } else {
      index = newStack.length
      $items[(index - 9) * (-1)].append(newItem)
    }
  }
})

$("#stack .btn-primary").on("click", function () {
  //if the stack is full empty the top 
  if ($items[0].innerText.includes("Stack Overflow!")) {
    $items[0].toggleClass("alert alert-danger")
    $items[0].replaceWith("")
  } else {
    //seek the latest item and remove it.( Sure there is a beetter way with closures))
    var i = 0;
    while (i < 9) {
      if ($items[i] == "" && $items[i + 1] != "") {
        $items[0].replaceWith("");
        stack.pop();
      }
    }
  }

})