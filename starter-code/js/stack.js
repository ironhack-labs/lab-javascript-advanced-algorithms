function getText(text) {
  text =document.getElementsByClassName("text_button");
  return console.log(text);

}
$(document).ready(function() {

//  for (var i = 0; i < 7; i++) {
  //  $(".cube").toggleClass("blue"+i);
  //}
  i=0;


  $(".but").click(function() {
    i++;
    $(".cube"+i).toggleClass("blue");
    console.log("click");
    //console.log(stack.push());
//
if (i>7) {
  i=7;

}


  });
  $(".but2").click(function() {


    //console.log(stack.pop());


    $(".cube"+i).toggleClass("blue");
    console.log("click");
i--;

    if (i<0) {
      i=0;

    }


  });

  });
