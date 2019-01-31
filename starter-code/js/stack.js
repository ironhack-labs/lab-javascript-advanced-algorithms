let userInput = "";

$(".text-input").on("keyup change", function() {
  userInput = this.value; 
});

let lastFilled = 0;
$('.add-btn').click(() => {
  console.log(lastFilled)
  
  switch(lastFilled){
    case 0:
      $('.visual-stack div:nth-child(9)').toggleClass('full');
      $('.visual-stack div:nth-child(9) span').text(userInput);
      lastFilled = 8
      break;
    case 8:
      $('.visual-stack div:nth-child(8)').toggleClass('full');
      $('.visual-stack div:nth-child(8) span').text(userInput);
      lastFilled = 7;
      break;
    case 7:
      $('.visual-stack div:nth-child(7)').toggleClass('full');
      $('.visual-stack div:nth-child(7) span').text(userInput);
      lastFilled = 6
      break;
    case 6:
      $('.visual-stack div:nth-child(6)').toggleClass('full');
      $('.visual-stack div:nth-child(6) span').text(userInput);
      lastFilled = 5;
      break;
    case 5:
      $('.visual-stack div:nth-child(5)').toggleClass('full');
      $('.visual-stack div:nth-child(5) span').text(userInput);
      lastFilled = 4;
      break;
    case 4:
      $('.visual-stack div:nth-child(4)').toggleClass('full');
      $('.visual-stack div:nth-child(4) span').text(userInput);
      lastFilled = 3
      break;
    case 3:
      $('.visual-stack div:nth-child(3)').toggleClass('full');
      $('.visual-stack div:nth-child(3) span').text(userInput);
      lastFilled = 2
      break;
    case 2:
      $('.visual-stack div:nth-child(2)').toggleClass('full');
      $('.visual-stack div:nth-child(2) span').text(userInput);
      lastFilled = 1
      break;
    case 1:
      $('.stack-overflow').toggleClass('hide flow')
  }


})