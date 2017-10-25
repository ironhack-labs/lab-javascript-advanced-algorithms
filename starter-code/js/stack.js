window.onload = function() {
  var stack = new StackDataStructure();
  stack.MAX_SIZE = 4;

  $('#add-num-stack').on('click', function(e){
    var results = stack.push(10);
    if (results == "Stack Overflow"){
      return alert("Stack Overflow");
    }
    results.forEach(function(num, i){
      $('#stack .well')[i].innerText = num;
    });
  });
}
