
var stack = new StackDataStructure()
var queue = new QueueDataStructure()

$(".add").on('click',function(){
  var val = $('#val').val();
  if (stack.canPush()) {
      var nuevostack = $(".stackelementempty:last")
      stack.push()
      nuevostack.text(val);
      nuevostack.removeClass("stackelementempty");
      nuevostack.addClass("stackelementfull");
  } else {
    var overflow = $(".stackelementstatus")
    overflow.text("Stack OverFloW!!")
    overflow.removeClass("stackelementstatus")
    overflow.addClass("stackoverflow")
  }
});

$(".take").on('click',function(){
  if (stack.isEmpty()==false) {
      var nuevostack = $(".stackelementfull:first")
      stack.pop()
      nuevostack.text("");
      nuevostack.removeClass("stackelementfull");
      nuevostack.addClass("stackelementempty");
  } else {
    var overflow = $(".stackelementstatus")
    overflow.text("Stack Underflow!!")
    overflow.removeClass("stackelementstatus")
    overflow.addClass("stackunderflow")
  }
});


$(".addq").on('click',function(){
  var val = $('#val2').val();
  if (queue.canEnqueue()) {
      var nuevoqueue = $(".stackelementemptyq:first")
      queue.enqueue()
      nuevoqueue.text(val);
      nuevoqueue.removeClass("stackelementemptyq");
      nuevoqueue.addClass("stackelementfullq");
  } else {
    var overflow = $(".stackelementstatusq")
    overflow.text("Queue OverFloW!!")
    overflow.removeClass("stackelementstatusq")
    overflow.addClass("stackoverflowq")
  }
});

$(".takeq").on('click',function(){
  if (queue.isEmpty()==false) {
      var nuevoqueue = $(".stackelementfullq:last")
      queue.dequeue()
      nuevoqueue.text("");
      nuevoqueue.removeClass("stackelementfullq");
      nuevoqueue.addClass("stackelementemptyq");
  } else {
    var overflow = $(".stackelementstatusq")
    overflow.text("Queue Underflow!!")
    overflow.removeClass("stackelementstatusq")
    overflow.addClass("stackunderflowq")
  }
});


  


