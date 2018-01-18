$(document).ready(function() {
    var stack = new StackDataStructure();

    $(".btn-primary").on("click", function(){
        $(".gray").last().removeClass("gray").addClass("blue")

    })
  });