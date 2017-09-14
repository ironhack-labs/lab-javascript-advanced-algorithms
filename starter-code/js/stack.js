$( document ).ready(function() {

$(".underflow").hide();
$(".overflow").hide();
$("span").hide();

var clickCounter = 0;

$(".take").click(function(){
  if(clickCounter===0){
    $(".underflow").toggle(0).delay(2000).toggle(0);
  } else {
    $("."+clickCounter).css("background-color","lightgrey");
    clickCounter--;
  }
  if(clickCounter<8){
    $("span").delay(200).hide(0);
    $(".overflow").delay(200).hide(0);
  }
});

$(".add").click(function(){
  if(clickCounter<9){
    clickCounter++;
  $("."+clickCounter).css("background-color", "lightblue");
  }
  if(clickCounter===9){
  $(".overflow").toggle(0).delay(2000);
  clickCounter--;
  }
  if(clickCounter===8){
    $("span").delay(300).show(0);
  }
});












});
