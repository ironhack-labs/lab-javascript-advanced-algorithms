let stackValue = 0;

$(".text-input").on("keyup change", function() {
  userInput = this.value; 
});

//$('.element-visual:not(.full)').last().addClass("full").text(userInput);

$('button.addButton').click(() =>
{
  
  $(".box2").removeClass("overUnder1")
  $(".box3").removeClass("overUnder1")

  if (stackValue >= 8) {
    $(".box2").addClass("overUnder1")
  }
  else{
    $('.box:not(.stack)').last().addClass('stack').text(userInput)
    stackValue ++;
  }
  
})

$('button.takeButton').click(() =>
{
  
  $(".box2").removeClass("overUnder1")
  $(".box3").removeClass("overUnder1")
   
  if (stackValue <= 0) {
    $(".box3").addClass("overUnder1")
  }
  else {
    $('.stack').first().removeClass('stack')
    stackValue --
  }

})