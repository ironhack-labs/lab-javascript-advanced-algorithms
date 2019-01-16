$(document).ready(function(){
  let listItems = new StackDataStructure();
  let placeOfItem = 8 - listItems.length;

  console.log(listItems.length);

  $("#btn-add").click(function() {
    if (listItems.canPush()) {
      let addedInput = $("input").val();
      $("#list-wrapper .list-group-item:nth-child(" + placeOfItem + ")").toggleClass("active1").text(addedInput);
      return listItems.push(addedInput);
    } else {
      alert("Stack Overflow");
    }
  })

  $("#btn-remove").click(function() {
    if (listItems.isEmpty() === false) {
      $("#list-wrapper .list-group-item:nth-child(" + placeOfItem + ")").text("").toggleClass("active1");
      return listItems.pop();
    } else {
      alert("Stack Underflow");   
    }
  })

});