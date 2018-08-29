$(document).ready(function () {

  var stackData = new StackDataStructure;

  $(".stack-btn-push").click(function () {
    var inputValue = $("#stack-text").val();
    stackData.push(inputValue)
    if (stackData.stackControl.length == 1) {
      $("#eight").text(inputValue);
      $("#eight").addClass("on");
    } else if (stackData.stackControl.length == 2) {
      $("#seven").text(inputValue);
      $("#seven").addClass("on");
    } else if (stackData.stackControl.length == 3) {
      $("#six").text(inputValue);
      $("#six").addClass("on");
    } else if (stackData.stackControl.length == 4) {
      $("#five").text(inputValue);
      $("#five").addClass("on");
    } else if (stackData.stackControl.length == 5) {
      $("#four").text(inputValue);
      $("#four").addClass("on");
    } else if (stackData.stackControl.length == 6) {
      $("#three").text(inputValue);
      $("#three").addClass("on");
    } else if (stackData.stackControl.length == 7) {
      $("#two").text(inputValue);
      $("#two").addClass("on");
    } else if (stackData.stackControl.length == 8) {
      $("#one").text(inputValue);
      $("#one").addClass("on");
      return $("#one").text(stackData.push(inputValue));
    }
  })

  $(".stack-btn-pop").click(function () {
    if (stackData.stackControl.length == 8) {
      $("#one").text("");
      $("#one").removeClass("on");
     
    } else if (stackData.stackControl.length == 7) {
      $("#two").text("");
      $("#two").removeClass("on");
    } else if (stackData.stackControl.length == 6) {
      $("#three").text("");
      $("#three").removeClass("on");
    } else if (stackData.stackControl.length == 5) {
      $("#four").text("");
      $("#four").removeClass("on");
    } else if (stackData.stackControl.length == 4) {
      $("#five").text("");
      $("#five").removeClass("on");
    } else if (stackData.stackControl.length == 3) {
      $("#six").text("");
      $("#six").removeClass("on");
    } else if (stackData.stackControl.length == 2) {
      $("#seven").text("");
      $("#seven").removeClass("on");
    } else if (stackData.stackControl.length == 1) {
      $("#eight").text("");
      $("#eight").removeClass("on");
      $("#eight").text("STACK UNDERFLOW");
     } 
     
   
    
    stackData.pop()
    
  

})
})