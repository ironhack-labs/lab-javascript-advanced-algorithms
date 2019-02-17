// Stack class 
// Array is used to implement stack 
function StackDataStructure() {
  this.items = [];
}

//has space? if is space => push(item) 
StackDataStructure.prototype.addElement = function (element) {
  if (this.items.length > 15) {
    return "Overflow";
  } else {
    this.items.push(element);
  }
}

// is anything in ?
StackDataStructure.prototype.removeLastElement = function () {
  // return true if stack is empty 
  if (this.items.length == 0) {
    return "Underflow"
  } else {
    return this.items.pop();
  }
}

// printStack() 
StackDataStructure.prototype.printStack = () => {
  var str = "";
  for (var i = 0; i < this.items.length; i++);
  str += this.items[i] + " ";
  return str;
}

