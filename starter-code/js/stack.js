$(document).ready(function() {
  var stacker = new StackDataStructure();
  console.log(stacker);

  var stackNumber = 0;
  $("#add-stack").click(function() {
    console.log("#stack-boxes");
    console.log($("#stack" + (10 - stackNumber)));
    if (stackNumber < 10) {
      $("#stack" + (10 - stackNumber)).css("background-color", "blue");
      stackNumber++;
    } else {
      $("#stack-msg").css("background-color", "red");
      $("#stack-msg").html("ESTOY HA-STACK ARRIBA");
      setTimeout(() => {
        alert("Lee el contenedor rojo");
      }, 500);
    }
  });

  $("#remove-stack").click(function() {
    console.log(stackNumber);
    if (stackNumber == 0) {
      setTimeout(() => {
        alert("Esto e-Stack vacio");
      }, 500);
    } else {
      $("#stack-msg").css("background-color", "grey");
      $("#stack-msg").empty();
      console.log($("#stack" + (stackNumber - 1).toString()));
      $("#stack" + (11 - stackNumber)).css("background-color", "gray");
      stackNumber--;
    }
  });

  
});
