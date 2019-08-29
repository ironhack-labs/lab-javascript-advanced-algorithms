var stackEl = new StackDataStructure();
var stackAdd = document.querySelector(".stack-container__button-ad");
var stackTake = document.querySelector(".stack-container__button-take");
var inputValue = document.querySelector(".stack-container__input").value;
var stackItem = document.querySelector(".stack-list__item");

stackAdd.onclick = function() {
  
  stackItem.setAttribute("style", "background-color:darkblue;");
};
