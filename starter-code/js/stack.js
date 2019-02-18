var stackDataContainer = $(".stack-data-container");

function addSDivs (arg) {
  for (var i = 0; i < arg; i++) {
    $(stackDataContainer).append('<div class="stack-data-element"></div>');
  }
}

$(document).ready(function(){
  stackDataStructure = new StackDataStructure(8);
  addSDivs(stackDataStructure.MAX_SIZE);

  $('.btn-add-stack').click(function () {
    console.log("He entrado");
  });

  $('.btn-take-stack').click(function () {
    console.log("He entrado");
  });

});