var stack = new StackDataStructure()
var addButton =  document.getElementById("add-button");
var removeButton =  document.getElementById("remove-button");


addButton.addEventListener("click", function(){
  document.getElementById("message-under").removeAttribute("class", "message");
  document.getElementById("message-under").innerHTML="";
  stack.push(document.getElementById("input").value);
   console.log(document.getElementById("input").value);
   for(var i =0; i< stack.stackControl.length ; i++){
    document.getElementById("b" +i).innerHTML = stack.stackControl[i];
    document.getElementById("b" +i).setAttribute("class","active")
   }
   if(stack.stackControl.length ===8){
    document.getElementById("message-over").setAttribute("class", "message");
    document.getElementById("message-over").innerHTML="Stack Overflow";
  }
})

removeButton.addEventListener("click", function(){
    document.getElementById("message-over").removeAttribute("class", "message");
    document.getElementById("message-over").innerHTML="";
    stack.pop();
    document.getElementById("b"+ stack.stackControl.length).innerHTML = "";
    document.getElementById("b"+ stack.stackControl.length).setAttribute("class", "greyBlock");
   for(var i = stack.stackControl.length ; i>0 ; i--){
    document.getElementById("b"+ (i-1)).innerHTML = stack.stackControl[(i-1)];
   }
   if(stack.isEmpty()){
    document.getElementById("message-under").setAttribute("class", "message");
    document.getElementById("message-under").innerHTML="Stack Underflow";
  }
})


