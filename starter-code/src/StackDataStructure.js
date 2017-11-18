/*Logic*/

function StackDataStructure () {
  this.name = "stack"
  this.stackControl = [];
  this.MAX_SIZE = 10; 
 }
 
 StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  }
  else {
    return false;
  }
 }

 StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length === this.MAX_SIZE){
    return false;
  }
  else {
    return true;
  }
 }
//take value from input and pass that in push
 StackDataStructure.prototype.push = function(element){
  if (this.canPush()){
    this.stackControl.push(element);
    var length = this.stackControl.length-1;
    var selector = "#" + length;
    //console.log(selector);
    $(selector).toggleClass("off").toggleClass("on");
    var input = $("#stack-input").val()
    console.log(input);
    $(selector).text(input);
    return this.stackControl;
  }
  else {
    alert("Stack Overlow");
    return "Stack Overflow";
  }
 }

 //hidden div, for first push it displays
 //for all subsequent pushes, it adds another

 StackDataStructure.prototype.pop = function() {
  if (!this.isEmpty()) {
    var lastElement = this.stackControl.length-1;
    var selector = "#" + lastElement;
    //console.log(selector);
    $(selector).toggleClass("off").toggleClass("on");
    $(selector).text("");
    return this.stackControl[lastElement];
  }
  else {
    alert("Stack Underflow");
    return "Stack Underflow";
  }
 }


/*Structure*/


var stack; 

$(document).ready(function(){
  stack = new StackDataStructure();
  $("#btn-stack-add").click(function(){
    console.log("press");
    var input = $("#stack-input").val();
    stack.push(input);
  })

  $("#btn-stack-delete").click(function(){
    stack.pop();
    stack.stackControl.pop();
    console.log("press");
  }) 
 });


  
  