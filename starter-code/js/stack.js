stack = new StackDataStructure();
$(document).ready(function() {

  var i = 5;
  $('.but-add').on('click', function() {
      $('article div:nth-child('+i+')').addClass('oneMore');
      i--;
    
});
  $('.but-take').on('click', function() {
    i++;
    $('article div:nth-child('+(i-1)+')').removeClass('oneMore');
  });
});
