var stack = new StackDataStructure();
var collection = document.getElementsByClassName("stack-item");
var arr = [].slice.call(collection);
var pos;

$(function() {
  $("#stackDelete").on("click", function() {
    if (stack.isEmpty()) {
      $(arr[arr.length - 1]).css("background-color", "red");
      $(arr[arr.length - 1]).css("color", "white");
      $(arr[arr.length - 1]).text(stack.pop());
      $(arr[arr.length - 1]).addClass("rojo");
      //$(arr[arr.length - 1]).removeClass("ocupado");
    } else {
      if ($(arr[0]).hasClass("rojo")) {
        $(arr[0]).css("background-color", "#D3D3D3");
        $(arr[0]).text("");
        $(arr[0]).removeClass("rojo");
        $(arr[0]).removeClass("ocupado");
        stack.pop()
      } else {
        for (var i = 0; i <= arr.length - 1; i++) {
          if ($(arr[i]).hasClass("ocupado")) {
            pos = i;
            break;
          }
        }
        $(".stackInput").val("");
        $(arr[pos]).css("background-color", "#D3D3D3");
        $(arr[pos]).css("color", "white");
        $(arr[pos]).text("");
        $(arr[pos]).removeClass("ocupado");
        stack.pop();
      }
    }
  });

  $("#stackAdd").on("click", function() {
    if (!stack.canPush()) {
      $(arr[0]).css("background-color", "red");
      $(arr[0]).css("color", "white");
      $(arr[0]).text(stack.push(""));
      $(arr[0]).addClass("rojo");
      $(arr[0]).removeClass("ocupado");
    } else {
      if ($(arr[arr.length - 1]).hasClass("rojo")) {
        $(arr[arr.length - 1]).css("background-color", "blue");
        $(arr[arr.length - 1]).text("");
        text = $(".stackInput").val();
        $(arr[arr.length - 1]).text(text);
        $(arr[arr.length - 1]).removeClass("rojo");
        $(arr[arr.length - 1]).addClass("ocupado");
        stack.push(text);
      } else {
        var text = $(".stackInput").val();
        $(".stackInput").val("");

        for (var i = arr.length - 1; i >= 0; i--) {
          if (!$(arr[i]).hasClass("ocupado")) {
            pos = i;
            break;
          }
        }
        $(arr[pos]).css("background-color", "blue");
        $(arr[pos]).css("color", "white");
        $(arr[pos]).text(text);
        $(arr[pos]).addClass("ocupado");
        stack.push(text);
      }
    }
  });
});
