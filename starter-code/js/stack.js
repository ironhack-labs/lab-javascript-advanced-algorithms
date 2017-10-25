$(document).ready(function(){
  var stack1 = new StackDataStructure();
if(stack1.canPush()){
  $(".stackAdd").on("click", function(){
    var canEnter = stack1.push();
    console.log(canEnter);
    if (canEnter != 'Stack Overflow'){
    $(".item:last").toggleClass("item stackColor");
  }
  else{
    alert('Stack overflow');
  }
  });
}
$(".stackRemove").on("click", function (){
  stack1.pop();
  $(".stackColor:first").toggleClass("stackColor item");
})
});
