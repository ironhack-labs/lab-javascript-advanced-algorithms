var queue;
$(document).ready(function() {
  queue = new QueueDataStructure();
  queue.MAX_SIZE = 8;
  var queueGrey = new QueueDataStructure();
  var queueBlue = new QueueDataStructure();
  
  $(".queue-element").each(function() {
    if ($(this).hasClass("grey")) queueGrey.enqueue($(this));
  });
  $(".addQ").on("click", function() {
    
    console.log(queueBlue.queueControl[1]);
    var inputValue = $("#queue-input").val();
    if (inputValue == "") return;
    if (queueGrey.isEmpty()) {
      $(".queue-elements > .overflow").prepend(
        "<div class='queue-element overflow'></div>"
      );
      $(".queue-elements > .overflow").text("QUEUE OVERFLOW");

      var that = $(this);

      setTimeout(function() {
        $(".overflow").remove();
        that.removeClass("no-clickable");
      }, 1000);
      $(this).addClass("no-clickable");
      return;
    }
    var e = queueGrey
      .dequeue();
      
      e.removeClass("grey")
      .addClass("blue")
      .text(inputValue);
    queueBlue.enqueue(e);
    var texto="";
    console.log(queueBlue)
   console.log(queueGrey)
  });


  $(".queue-element").each(function() {
    if ($(this).hasClass("blue")) queueBlue.enqueue($(this));
  });
  $(".takeQ").on("click", function() {
    
    var inputValue = $("#queue-input").val();
    
    if (queueBlue.isEmpty()) {
      $(".queue-elements").append(
        "<div class='queue-element overflow'></div>"
      );
      $(".queue-elements > .overflow").text("queue UNDERFLOW");

      var that = $(this);

      setTimeout(function() {
        $(".queue-elements > .overflow").remove();
        that.removeClass("no-clickable");
      }, 1000);
      $(this).addClass("no-clickable");
      return;
    }
    var e = queueBlue
      .dequeue();
      e.addClass("grey")
      .removeClass("blue")
      .text("");
    queueGrey.enqueue(e);
    e=$(".queue-elements").children().first()
    e.addClass("grey")
    e.text("")
    e.removeClass("blue")
    //queueBlue.dequeue()
    $(".queue-elements").append(" ")
    $(".queue-elements").append(e)
    /*e.css({"margin":"0 1px",
        "margin-bottom":"5px"})
    //e.remove();*/
   console.log(queueBlue)
   console.log(queueGrey)

  });
});
