var stack = new StackDataStructure();
 createStackElements();
 function createStackElements(){
  $(".stack .element").remove();
  var element;
  for (var i = stack.MAX_SIZE - 1; i >= 0 ; i--){
    element = document.createElement('div');
    element.classList.add("element");
    if (i < stack.stackControl.length){
      element.innerText = stack.stackControl[i];
    }
     $(".pila").append(element);  
  }
}

 $(".btnadd.btnstack").click(function(e){
    var result = stack.push($(".inputstack").val());
  
    if (result === "Stack Overflow"){
      alert("Stack Overflow");
    }
    createStackElements();
});

 $(".btntake.btnstack").click(function(e){
  var result = stack.pop();
   if (result === "Stack Underflow"){
    alert("Stack Underflow");
  }
  createStackElements();
});

$(".btnadd.btnstack").click(function(){
  $('input[type="text"]').val("");
});