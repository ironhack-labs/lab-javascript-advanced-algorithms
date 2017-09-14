$(document).ready(function(){
  var queue = new QueueDataStructure();
  var html = '';

  for(var i=0; i<queue.MAX_SIZE;i++){

    html += '<li class="list-group-item list-group-item-secondary queue-data-cell"></li>';

  }



  // Add all the divs to the HTML
  document.getElementById('#queue-picture').innerHTML = html;

});
