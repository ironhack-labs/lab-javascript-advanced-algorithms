
var stack = new StackDataStructure()

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
  


