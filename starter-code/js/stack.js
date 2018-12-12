
document.addEventListener('DOMContentLoaded', function () {

var stack = new StackDataStructure ();

var addButton = document.querySelector('.btn-add');
var takeButton = document.querySelector('.btn-take');
var underFlow = document.querySelector(".underflow");
var overFlow = document.querySelector(".overflow");

addButton.onclick = addStack;
takeButton.onclick = takeStack;

  function addStack(){

    var inputStack =  document.querySelector('input[id="stack"]').value;
    
    if(stack.canPush() && inputStack !== ""){
      underFlow.style.display = "none";
      stack.push(inputStack);
      $( ".box" ).last().addClass("occupied").removeClass("box").text(stack.stackControl[stack.stackControl.length -1]);
    } 
    else if(!stack.canPush()){
      overFlow.style.display = '';
    }
  }

  function takeStack(){
    var boxOccupied = document.getElementById(".ocuppied");
    if(stack.isEmpty()){
      underFlow.style.display = "";
    } else {
      $(".box-stack").prepend("<div class='box'></div>");
      $(".occupied").first().remove();
      stack.stackControl.pop();
      overFlow.style.display = 'none';}
  }

});