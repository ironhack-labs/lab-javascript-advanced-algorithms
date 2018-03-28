var stack = new StackDataStructure ();

function hideItem($e) {
  $e.fadeOut(100);
}
function stackAdd(item){
  var items = getItems();
  if(stack.canPush()){
    stack.push(item);
    var $e = getItems().last();
    showItem($e);
    setText(item, $e);
    if($('.underflow').last().attr("display") != "none" && getHiddens().length==1){
      toggleUnderflow();
    }
    //Mostrar el div con el texto
  }else {
    toggleOverflow();
  }
}
function stackTake(){
  if(!stack.isEmpty()){
    stack.pop()
    var $e = getHiddens().first();
    $e.empty();
    hideItem($e);
    console.log(stack.stackControl);
  }else {
    toggleUnderflow();
  }
}
function getItems() {
  return $('.items > div.item');
}
function getHiddens() {
  return $('.items > div.shown');
}
function setText(text, $e) {
  var h3 = $('<h3>'+text+'</h3>');
  $e.append(h3);
  return $e;
}
function showItem ($e) {
  $e.addClass('shown').removeClass('item');
}
function hideItem ($e) {
  $e.addClass('item').removeClass('shown');
}
function toggleOverflow(){
  $('.overflow').first().toggle();
}
function toggleUnderflow(){
  $('.underflow').last().toggle();
}
window.onload = function() {
 var calculatePriceButton = document.getElementById("calc-prices-button");
 var addButton = document.getElementById("btn-add");
 var takeButton = document.getElementById("btn-take");

//  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;


  addButton.onclick = function() {
    var texto = $('#add').val();
     stackAdd(texto);
  }
  takeButton.onclick = function() {
    stackTake();
  }
 
};
