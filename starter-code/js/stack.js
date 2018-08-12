var s = ["this", "is", "a", "test", "array"];
//var topStack = $('.stacked:first');
var s = new StackDataStructure();
var html = "";
for (let i = 0; i < s.MAX_SIZE; i++) {
  html +=
    '<div id="stack-element" class="col alert alert-warning">' +
    s[i] +
    "</div>";
}

$(document).ready(function() {
  // Add all divs
  $("#stack").html(html);

  // Clear form field on click
  $("input").click(function() {
    $("input").val("");
  });

  //push button
  $("#add").click(function() {
    if (!$("input").val().length > 0) {
      //empty strings not allowed---------
      console.log("empty string not allowed");
      $("h2").text("ERROR: Empty Strings not allowed")
    } else if (s.canPush()){
      //SUccessful push
      var stackVal = $("input").val();
      //$("input").val("");
      s.push(stackVal);
      for (let i = 0; i < s.MAX_SIZE; i++) {
        html += '<div id="stack-element" class="col">' + s[i] + "</div>";
      }
      $(".alert-warning")
      .last()
      .html(stackVal);
      $(".alert-warning")
      .last()
      .toggleClass("alert-warning alert-success");
      $("h2").text("Successful Stack!")
      
      console.log("stacking");
    } else {
      // Overflow Condition
      $("h2").text("ERROR: Stack Overflow")
      console.log("overflow condition");
      var topStack = $(".alert-success:first").html();
      $(".alert-success:first").html("Stack Overflow");
      $(".alert-success:first").addClass("alert-danger");
     //DISABLE CLICKING
     $("#add").prop("disabled",true);
     $("#sub").prop("disabled",true);

      //RESET
      setTimeout(function() {
        $(".alert-success:first").html(topStack);
        $(".alert-success:first").removeClass("alert-danger");
     $("#add").prop("disabled",false);
     $("#sub").prop("disabled",false);

      }, 2500);
    }
  });
  //pop button
  $("#sub").click(function() {
    //Underflow condition
    if (s.isEmpty()) {
      $("h2").text("ERROR: Stack Underflow")

      console.log("Underflow");
      $(".alert-warning:last").html("Stack Underflow");
      $(".alert-warning:last").toggleClass("alert-warning alert-danger");
      //Reset after underflow
      setTimeout(function() {
        $(".alert-danger").html("Empty Stack");
        $(".alert-danger").toggleClass("alert-warning alert-danger");
      }, 2000);
    } else {
      $("h2").text("Successful Stack Pop")
      
      //successfull pop--------------
      s.pop();
      $(".alert-success:first").html("Empty Stack");
      $(".alert-success:first").toggleClass("alert-success alert-warning");
      console.log("de stack it");
    }
  });

  // Execute a function when the user releases a key on the keyboard
  $("input").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#add").click();
    }
  });

  // END OF DOC READY ---------------------
});
