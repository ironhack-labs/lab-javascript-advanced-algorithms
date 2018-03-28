var stack = new StackDataStructure ();

function hideItem($e) {
  $e.fadeOut(100);
}
function stackAdd(item){
  var items = getItems();
  if(stack.push(item)){

    //Mostrar el div con el texto
  }else {
    toggleOverflow();
  }
}
function stackTake(){
  if(stack.pop()){
    getItems().last().hideItem();
  }else {
    toggleUnderflow();
  }
}
function getItems() {
  return $('.items > div.item');
}
function setText(text, $e) {
  var h3 = $('<h3>'+text+'</h3>');
  $e.append(h3);
  return $e;
}
function showItem ($e) {
  $e.addClass('show').deleteClass('item');
}
function hideItem ($e) {
  $e.addClass('item').deleteClass('show');
}
function toggleOverflow(){
  $('.overflow').first().toggle();
}
function toggleUnderflow(){
  $('.underflow').last().toggle();
}
window.onload = function() {
 var calculatePriceButton = document.getElementById("calc-prices-button");
 var createItemButton = document.getElementById("new-item-create");
 var deleteButtons = document.getElementsByClassName("btn-delete");

//  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;

 for (var i = 0; i < deleteButtons.length; i++) {
   var button = deleteButtons[i];
   button.onclick = function() {
     deleteItem(button.parentNode.parentNode);
   }
   // button.addEventListener('click', function() {
   //   deleteItem(button.parentNode.parentNode);
   // }); 
 }
};
