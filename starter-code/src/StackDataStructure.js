function StackDataStructure () {
this.stackControl = [];
this.MAX_SIZE = 10;
this.isEmpty;
this.canPush;
this.push;
this.pop;
}

var stack = new StackDataStructure;

StackDataStructure.prototype.isEmpty = function(){
  return this.stackControl.length < 1 ? true : false;
};

StackDataStructure.prototype.canPush = function(){
  if (this.MAX_SIZE > this.stackControl.length){
    return true;
  } else {
    return false
  }

}

StackDataStructure.prototype.push = function(elem){
  if (this.MAX_SIZE > this.stackControl.length){
    this.stackControl.push(elem);
    return this.stackControl;
  } else {
    return ("Stack Overflow")
  }

}

StackDataStructure.prototype.pop = function(){
  if (this.stackControl.length === 0){
    return "Stack Underflow"
  } else {
  this.stackControl.pop();
  return this.stackControl[this.stackControl.length-1]
  }
};


// var stack = new StackDataStructure;

// stack.push = function(value){
//   return stack.stackControl.push(value);
// }
//
// stack.isEmpty = function () {
//   return stack.stackControl.length < 1 ? true : false;
// };
