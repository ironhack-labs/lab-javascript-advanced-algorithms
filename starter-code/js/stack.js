var stack = new StackDataStructure;

var stackNode = document.querySelector(".stack");



function printStack(){
    var html="";
    for(i=0;i<stack.stackControl.length;i++){
        html +="<div class='stack_unit'>"+stack.stackControl[i]+"</div>"
    }
    if(!stack.canPush()){
        html +="<div class='flow'>STACK OVERFLOW</div>";   
        }
    stackNode.innerHTML = html;
}



document.querySelector("#addbtn").onclick = function (){
   
    if(document.querySelector("#input1").value!==""){
        stack.push(document.querySelector("#input1").value);
        printStack();   
    }
}
document.querySelector("#takebtn").onclick = function(){
    stack.pop()
    if(stack.isEmpty()){
        stackNode.innerHTML = "<div class='flow'>STACK UNDERFLOW</div>"
    }else{
    printStack();
    }

}
