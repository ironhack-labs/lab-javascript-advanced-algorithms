
$(document).ready(function(){

var stack = new StackDataStructure();
var stackText = $('#stackelement');
var addBS = $('#add-stack');
var quitBS = $('#delete-stack');
var sOverFlow = $('#stack-div .over');
var sUnderFlow = $('#stack-div .under');
var quitSLine = $('#removed_stack ul');



addBS.click(function(){

var valStackPush = stack.push(stackText.val());

  if(valStackPush == 'Hey man! Stack Overflow'){
    sOverFlow.text(valStackPush);
    sOverFlow.addClass('show');
  } else {
    sUnderFlow.removeClass('show');
    for(var i = 0; i < valStackPush.length; i++){
      var limS = $('.stack-element:nth-child(' + (14 - i) + ')');
      limS.addClass('addedelement');
      limS.text(valStackPush[i]);
      stackText.val('');
    }
  }
});


quitBS.click(function(){
  var popped = stack.pop();

  if(popped == 'Stack Underflow'){
    sUnderFlow.text(popped);
    sUnderFlow.addClass('show');
  } else {
    $('#stack-element').removeClass('addedelement');
    $('#stack-element').text('');
    sOverFlow.removeClass('show');

     for(var i = 0; i < stack.stackControles.length; i++){
       
    $('.stack-element:nth-child(' + (14 - i) + ')').addClass('addedelement');
    $('.stack-element:nth-child(' + (14 - i) + ')').text(stack.stackControles[i]);
     }
    var aLine = $('<li></li>');
    aLine.text(popped);
    quitSLine.append(aLine);
  }
});
});