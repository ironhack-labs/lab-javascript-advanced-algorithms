$(document).ready(function() {

  var queue = new QueueDataStructure ();

  $(".queue .add").on('click',function() {
      $(".queue .unselected:last").addClass("active");
      $(".queue .unselected:last").removeClass("unselected");
      // $(".queue .unselected:last").next().addClass("last-selected");
      console.log(queue.enqueue(0));
    });

    $(".queue .take").on('click',function() {
        $(".queue .active:last").addClass("unselected");
        $(".queue .active:last").removeClass("active");
        console.log(queue.dequeue());
      });


});
