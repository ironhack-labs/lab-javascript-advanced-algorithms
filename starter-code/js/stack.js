let userInput = "";

$(".text-input").on("keyup change", function() {
  userInput = this.value; 
});

let lastInteraction = 0;
$('.add-btn').click(() => {
  console.log($('.element-visual:nth-child(2)').hasClass('full'));
  if(!$('.element-visual:nth-child(2)').hasClass('full')){
    $('.element-visual:not(.full)').last().addClass("full").text(userInput);
    // $('.element-visual:not(.full)').last().text(userInput);
  }
  else{
    $('.stack-overflow').toggleClass('hide flow')  
  }
})

$('.take-btn').click(() => {
  console.log($('.element-visual:nth-child(2)').hasClass('full'));
  if($('.element-visual:nth-child(9)').hasClass('full')){
    $('.full').first().removeClass("full").empty()
  }
  else{
    $('.stack-underflow').toggleClass('hide flow')  
  }
})