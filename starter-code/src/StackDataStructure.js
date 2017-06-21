
function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
  return (this.stackControl.length == 0);
}

StackDataStructure.prototype.canPush = function(){
  return (this.stackControl.length < this.MAX_SIZE);
}

StackDataStructure.prototype.push = function(element){
  if (!this.canPush()) {
    return("Stack Overflow");
  } else {
    this.stackControl.push(element);
    var itemPushed = [element];
    return itemPushed;
  }
}

StackDataStructure.prototype.pop = function(element){
  if (this.isEmpty()) {
    return("Stack Underflow");
  } else {
    var lastItem = this.stackControl.pop();
    return lastItem;
  }
}
