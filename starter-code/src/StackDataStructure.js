// class StackDataStructure () {
//     constructor(){
//         this.array = []
//         this.maxNumberItems = 8
//     }
//     stackOverFlow(){
//         if (array.length === maxNumberItems) ? true : false;
//     }
//     stackUnderFlow(){
//         if (array.length === 1) ? true : false;
//     }
// }

function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length !== this.MAX_SIZE ? true : false;
};
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0 ? true : false;
};
StackDataStructure.prototype.push = function(element) {
  if (this.canPush()) {
    this.stackControl.push(element);
    return this.stackControl;
  } else {
    console.log("Stack Overflow");
    return "Stack Overflow";
  }
};
StackDataStructure.prototype.pop = function() {
  if (!this.isEmpty()) {
    var lastElement = this.stackControl[this.stackControl.length - 1];
    this.stackControl.pop();
    return lastElement;
  } else {
    console.log("Stack Underflow");
    return "Stack Underflow";
  }
};
