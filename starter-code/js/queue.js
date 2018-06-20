var queue = new QueueDataStructure();
var collection = document.getElementsByClassName("queue-item");
var array = [].slice.call(collection);
var pos;
var lista = $("#queue-list")
$(function() {
  $("#queueDelete").on("click", function() {
    if (queue.isEmpty()) {
      $(array[array.length - 1]).css("background-color", "red");
      $(array[array.length - 1]).css("color", "white");
      $(array[array.length - 1]).text(queue.dequeue());
      $(array[array.length - 1]).addClass("rojo");
      $(array[array.length - 1]).removeClass("ocupado");
    } else {
      for(var i = array.length-1; i>=0;i--){
        if($(array[i]).hasClass("ocupado") && (i!=array.length-1)){
          $(array[i+1]).text($(array[i]).text())
        }
      }
      $(array[array.length - queue.queueControl.length]).css("color", "white");
      $(array[array.length -queue.queueControl.length]).css("background-color", "#D3D3D3");
      $(array[array.length -queue.queueControl.length]).text("");
      $(array[array.length -queue.queueControl.length]).removeClass("ocupado");
      queue.dequeue()
    }
  });

  //Boton add
  $("#queueAdd").on("click", function() {
    if (!queue.canEnqueue()) {
      $(array[0]).css("background-color", "red");
      $(array[0]).css("color", "white");
      $(array[0]).text(queue.enqueue(""));
      $(array[0]).addClass("rojo");
      $(array[0]).removeClass("ocupado");
    } else {
      if ($(array[array.length - 1]).hasClass("rojo")) {
        $(array[array.length - 1]).css("background-color", "blue");
        $(array[array.length - 1]).text("");
        text = $(".queueInput").val();
        $(array[array.length - 1]).text(text);
        $(array[array.length - 1]).removeClass("rojo");
        $(array[array.length - 1]).addClass("ocupado");
        queue.enqueue(text);
      } else {
        var text = $(".queueInput").val();
        $(".queueInput").val("");

        for (var i = array.length - 1; i >= 0; i--) {
          if (!$(array[i]).hasClass("ocupado")) {
            pos = i;
            break;
          }
        }
        $(array[pos]).css("background-color", "blue");
        $(array[pos]).css("color", "white");
        $(array[pos]).text(text);
        $(array[pos]).addClass("ocupado");
        queue.enqueue(text);
      };
    }
  });
});
