/// Jquery
var stack = new StackDataStructure();

//// create boxes
for (var a = 0; a < stack.MAX_SIZE ; a++){
  $('div.books').append("<div class='well well-lg' position='"+a+"'><p></p></div>");
}
//// push value + clear input + toggle & value
$('button.add').click(function () {
  if ($('#book').val() !== ""){
    stack.push($('#book').val());
    $('#book').val("");
    if (counter === 1){
      $('body > section > div.books.col-lg-9 > div:nth-child(10)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div.well.well-lg.active > p').text(stack.stackControl[0]);
    }
    else if (counter === 2){
      $('body > section > div.books.col-lg-9 > div:nth-child(9)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(9) > p').text(stack.stackControl[1]);
    }
    else if (counter === 3){
      $('body > section > div.books.col-lg-9 > div:nth-child(8)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(8) > p').text(stack.stackControl[2]);
    }
    else if (counter === 4){
      $('body > section > div.books.col-lg-9 > div:nth-child(7)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(7) > p').text(stack.stackControl[3]);
    }
    else if (counter === 5){
      $('body > section > div.books.col-lg-9 > div:nth-child(6)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(6) > p').text(stack.stackControl[4]);
    }
    else if (counter === 6){
      $('body > section > div.books.col-lg-9 > div:nth-child(5)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(5) > p').text(stack.stackControl[5]);
    }
    else if (counter === 7){
      $('body > section > div.books.col-lg-9 > div:nth-child(4)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(4) > p').text(stack.stackControl[6]);
    }
    else if (counter === 8){
      $('body > section > div.books.col-lg-9 > div:nth-child(3)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(3) > p').text(stack.stackControl[7]);
    }
    else if (counter === 9){
      $('body > section > div.books.col-lg-9 > div:nth-child(2)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(2) > p').text(stack.stackControl[8]);
    }
    else if (counter === 10){
      $('body > section > div.books.col-lg-9 > div:nth-child(1)').toggleClass('active');
      $('body > section > div.books.col-lg-9 > div:nth-child(1) > p').text(stack.stackControl[9]);
    }
  }
  else {
    counter--;
  }
});
//// remove
$('button.add').click(function () {
  /// j'ai le poids de ouf...
});