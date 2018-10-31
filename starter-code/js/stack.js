var stackDOM                 = $(".stack-container");



var stack= new StackDataStructure();

drawStack();

function drawStack(){
  $(".stack .element").remove();
  var   stackArray=stack.stackControl;
  var maxSize= stack.MAX_SIZE;
  var stackLength= stackArray.length;
  var element;
  for (var i=maxSize-1;i>=0;i--){
    
    element=document.createElement('div');
    element.classList.add("element");
    if (i<stackLength){
      element.innerText=stackArray[i];
      element.classList.add("filled");
    }
     stackDOM.append(element);  
  }
  
}


$(".btn-add.btn-stack").click(function(e){
    var result= stack.push($(".stack-input").val());
  
    if (result==="Stack Overflow"){
      alert("STACK OVERFLOW");
    }
    drawStack();
});


$(".btn-take.btn-stack").click(function(e){
  var result= stack.pop();

  if (result==="Stack Underflow"){
    alert("STACK UNDERFLOW");
  }
  drawStack();
});