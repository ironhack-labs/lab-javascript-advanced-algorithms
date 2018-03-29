$("document").ready(function () {
  // OBJETO STACKDATASTRUCTURE

  var objectQueue = new QueueDataStructure();

  // TEXTO STACK INPUT

  $("#queue-btn-add").click(function () {

    var textoQueue = $("#queue-input").val();

    if ($("#queue-input").val() === "") {
      alert("Introduce un elemento");
    } else {
      $("#queue-input").val("");
      objectQueue.enqueue(textoQueue);

      var element = objectQueue.queueControl[objectQueue.queueControl.length - 1]

      $(".readyQueue").text(element);

      $(".readyQueue").removeClass("readyQueue").addClass("activeQueue");

      $(".activeQueue").prev().first().addClass("readyQueue");
    }
  });

  $("#queue-btn-remove").click(function () {

    $("#queue-input").val("");

    objectQueue.dequeue();

    var activeItems = $(".activeQueue");

    for(var i=activeItems.length -1; i>=0; i--){

      if(i===0){
        activeItems[0].innerText = "";
        break;
      }

      activeItems[i].innerText = activeItems[i-1].innerText;
      activeItems[i-1].innerText = "";
    }

    $(".activeQueue").prev().first().removeClass("readyQueue");

    $(".activeQueue").first().removeClass("activeQueue").addClass("readyQueue");
  })

})