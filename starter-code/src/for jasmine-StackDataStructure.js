

function StackDataStructure () {
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

 StackDataStructure.prototype.push = function(element){
  if (this.canPush()){
    this.stackControl.push(element);
    //$(".stack").append('<div class="stack-element"></div>');
    return this.stackControl;
  }
  else {
    return "Stack Overflow";
  }
 }

 //hidden div, for first push it displays
 //for all subsequent pushes, it adds another

 StackDataStructure.prototype.pop = function() {
  if (!this.isEmpty()) {
    var lastElement = this.stackControl.length-1;
    return this.stackControl[lastElement];
  }
  else {
    return "Stack Underflow";
  }
 }