window.onload = function() {
  var stack = new StackDataStructure();
  stack.MAX_SIZE = 4;

  $('#add-num-stack').on('click', function(e){
    var results = stack.push($('#stack-num').val());
    if (results == "Stack Overflow"){
      return alert("Stack Overflow");
    }
    for(var i = (stack.MAX_SIZE - 1); i >= 0; i--){
      for(var j = 0; j < results.length; j++){
        $('#stack .well')[i].innerText = results[j];
        $('#stack-num').val("").innerText = "";
      }
    }
  });
}
