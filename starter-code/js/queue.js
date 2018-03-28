$(document).ready(function() {
  var queue = new QueueDataStructure();
  console.log(queue);
  $("#queue-msg").hide();
  var queueNumber = 1;
  $("#add-queue").click(function() {
    if (queueNumber > 10) {
      queueNumber = 10;
      console.log(queueNumber);
      $("#queue-msg").show();
      $("#queue-msg").css("background-color", "orange");
      $("#queue-msg").html("LA COLA ESTA LLENA");
      setTimeout(() => {
        alert("La cola esta llena");
      }, 500);
    } else {
      $("#queue" + queueNumber).css("background-color", "purple");
      console.log(queueNumber);
    }
    queueNumber++;
  });

  $("#remove-queue").click(function() {
    if (queueNumber == 1) {
      alert("La cola está vacía");
    } else {
      $("#queue-msg").hide();
      console.log($("#queue" + (11 - queueNumber)))
      $("#queue" + (11 - queueNumber)).css("background-color", "grey");
    }
    queueNumber--;
  });
});
