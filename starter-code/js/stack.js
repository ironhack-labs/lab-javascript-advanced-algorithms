$(document).ready(function() {
  // stack.stackControl = document.getElementById("stockpile");
  $(".slot").removeClass("full");
  $('#stockpile > .oflow').hide();
  $('#stockpile > .uflow').hide();
});

$("#buttons").on("click", ".add-stack", function() {
  $("#stockpile > .empty:last").removeClass("empty").addClass("full");
  // console.log(this.MAX_SIZE);
  if ($('#stockpile > .final').hasClass("full")) {
    $('#stockpile > .oflow').show();
    
  }
});

$("#buttons").on("click", ".take-stack", function() {
  $("#stockpile > .full:first").removeClass("full").addClass("empty");
  while ($('#stockpile > .begin').hasClass("empty")) {
    $('#stockpile > .uflow').show();
  }
});
