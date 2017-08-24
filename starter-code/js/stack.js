
var stack;
var mainDiv;
var divToStack;

function createDiv(){
  var myDiv = $("<div>");
  myDiv.addClass("emptyStack");
  return myDiv;
}
function countHowMany(){
  var contador = 0;
  contador = $(".emptyStack").length -1;
  return contador;
}

function showDiv (count){
  var addedDiv;
  var toPush = $(".inputFirst").val();
  stack.push(toPush);
  addedDiv = $(".emptyStack")[count];
  $(addedDiv).addClass("addedStack");
  $(addedDiv).removeClass("emptyStack");
  $(addedDiv).text(toPush);
}

function removeDiv(){
  var divtoEliminate = $(".addedStack")[0];
  $(divtoEliminate).addClass("emptyStack");
  $(divtoEliminate).removeClass("addedStack");
  $(divtoEliminate).text("");
  stack.pop();
}

$(document).ready(function(){
stack = new StackDataStructure();
mainDiv = $(".stackHere");

  for(var i = 0; i < stack.MAX_SIZE; i++){
    mainDiv.append(createDiv());
  }

  $(".add").on("click",function(){
    var emptyStack = $(".emptyStack")[stack.MAX_SIZE -1];
    $(emptyStack).text("STACK UNDERFLOW");
    $(emptyStack).removeClass("red");
    if(stack.canPush()){

      showDiv(countHowMany());
    }
    else{
      var myalert = $(".addedStack")[0];
      $(myalert).text("STACK OVERFLOW");
      $(myalert).addClass("red");
    }
  });

  $(".take").on("click",function(){
    if(!stack.isEmpty()){
      var myalert = $(".addedStack")[0];
      $(myalert).removeClass("red");
      removeDiv();
  }
  else{
    var emptyStack = $(".emptyStack")[stack.MAX_SIZE -1];
    $(emptyStack).text("STACK UNDERFLOW");
    $(emptyStack).addClass("red");
  }
  });

});
