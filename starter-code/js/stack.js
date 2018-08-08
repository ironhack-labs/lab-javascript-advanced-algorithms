var s;
//var topStack = $('.stacked:first');

$(document).ready(function() {
  var s = new StackDataStructure();
  var html = "";

  for (let i = 0; i < s.MAX_SIZE; i++) {
    html +=
      '<div id="stack-element" class="col btn-outline-secondary empty">Empty Stack</div>';
  }
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
      // Overflow Condition
    } else if ($("#stack-element:first").hasClass("stacked")) {
      console.log("overflow condition");
      $(".stacked:first").html("Stack Overflow");
      $(".stacked:first").addClass("over");

      //RESET
      setTimeout(function() {
        $(".stacked:first").removeClass("over");
      }, 2000);
    } else {
        //SUccessful push
      var stackVal = $("input").val();
      $("input").val("");
      s.push(stackVal);
      $("#stack-element").not(".stacked").first().addClass("stacked");
      $(".stacked:first").html(stackVal);
      console.log("stacking");
    }
  });
  //pop button
  $("#sub").click(function() {
    //Underflow condition
    if (!$("#stack-element:last").hasClass("stacked")) {
      $(".empty:last").html("Stack Underflow");
      $(".empty:last").addClass("over");
      //Reset after underflow
      setTimeout(function() {
        $(".empty:last").html("Empty");
        $(".empty:last").removeClass("over");
      }, 2000);
    } else {
      //successfull pop--------------
      s.pop();
      $(".stacked:first").html("Empty Stack");
      $(".stacked:first").removeClass("stacked");
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
