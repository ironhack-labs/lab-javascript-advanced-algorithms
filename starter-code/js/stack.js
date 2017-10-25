$(document).ready(function(){
stack=new StackDataStructure();

$('.back').on("click", function() {
  memoryGame.selectCard($(this));
  memoryGame.finished();
});


});
