$(function () {
  var myStackStructure = new StackDataStructure();
  
  function renderStack() {
    var elemToDisplay = myStackStructure.stackControl;
    var numElem = elemToDisplay.length;
    var classStack = $('.stack-elem');
    for (var i = 0, j = numElem - 1; i < numElem.length; i++, j--) {
      var x = elemToDisplay[i];
      classStack[j].innerText(elemToDisplay[i]);
      classStack[j].removeClass('inactive');
    }
  }

  $('.add-btn').click(function() {
    var elemToAdd = $('input').val();
    if ($('#warning-0').hasClass('hide-warning') == false) {
      $('#warning-0').addClass('hide-warning');  
    }
    $('input').val('');
    if (myStackStructure.push(elemToAdd) == 'Stack Overflow') {
      $('#warning-0').removeClass('hide-warning');
    } else {
    renderStack();
    }
  });

  $('.take-btn').click(function() {
    var elemToAdd = $('input').val();
    if ($('#warning-1').hasClass('hide-warning') == false) {
      $('#warning-1').addClass('hide-warning');  
    }
    $('input').val('');
    if (myStackStructure.pop() == 'Stack Underflow') {
      $('#warning-1').removeClass('hide-warning');
    } else {
      renderStack();
    } 
  });










});

