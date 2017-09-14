$(document).ready(function(){
  var stack = new StackDataStructure();
  var html = '';

  for(var i=0; i<stack.MAX_SIZE;i++){

    html += '<li class="list-group-item list-group-item-secondary stack-data-cell"></li>';

  }



  // Add all the divs to the HTML
  document.getElementById('#stack-picture').innerHTML = html;

});
