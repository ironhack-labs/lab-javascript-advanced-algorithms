$(document).ready(function () {
  console.log("ready!");

});

var myQueue = new QueueDataStructure(); // create queue object. 
$(".add-queue").click(function () {
  if (myQueue.canEnqueue() == false) {
    $(".queue-cols").prepend("<div class='queue col-0'>Queue Overflow</div>"); //it will create warning div if canEnque returns false
    $(this).addClass("blocked"); // disable add button because queue is full. this = "add-queue" button
  } else {
    $(".col-6").remove(); // in case we try to take from empty queue .col-6 div (warning div) with "Queue Underflow" message will be created. 
    //In this part of code we are adding element, so if we had queue underflow before adding, first we have to remove warnig div.

    $(".take-queue").removeClass("blocked"); //if at least one element exists in queue, take button has to be active => remove "blocked" class
    $(this).removeClass("blocked"); // add button has to be active because in this part of code canEnqueue returns true.
    myQueue.enqueue($('.input-element-queue').val()); //push input value in queueControl.
    console.log(myQueue.queueControl);
    if ($('.input-element-queue').val() != "") { //disable modification of queue on web page if empty string is inserted.
      $(".queue:empty").last().text($('.input-element-queue').val()).addClass("active"); // find last cell without text, and insert text in it + "active"
      //class (green background);
      $("input").val("Add element"); // every time element is added in queue, input filed has to reset it's value. User can add new element
    }
  }

});

$(".take-queue").click(function () { // removes element from queue
  if (myQueue.isEmpty() == true) {
    $("<div class='queue col-6'>Queue Underflow</div>").appendTo(".queue-cols"); // queue is empty and we try to take from empty queue => warning div
    $(this).addClass("blocked"); // this = "take-queue" button
  } else {
    $(".col-0").remove(); //in case we try to add to queue which is full=> .col-0 div (warning div) with "Queue Overflow" message will be created. 
    //In this part of code we are adding taking element out, so if we had queue overflow before taking element out, first we have to remove warnig div. 
    $(".add-queue").removeClass("blocked"); // in this part of code at least one cell in queue is freed up. => add button shoul be again active.
    $(this).removeClass("blocked"); // .take-queue button has to be active in this part of code (isEmpty retuns false)
    myQueue.dequeue(); // removes element from queueControl.
    console.log(myQueue.queueControl);
    reorganizeQueue(myQueue.queueControl); // it will change HTML based on current queueControl array. It takes array as argument
  }
})

function reorganizeQueue(queueArr) {
  var i = queueArr.length - 1; // for loop will start from last element in queueArr
  $(".queue").not(":empty").empty().removeClass("active"); // empty all cells
  for (var i = queueArr.length - 1; i >= 0; i--) { //fill cells with queueArr elements and add class "active" to them.
    $(".queue:empty").last().text(queueArr[i]).addClass('active');
  }
}