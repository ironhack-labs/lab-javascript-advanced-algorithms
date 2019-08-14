

function StackDataStructure () {
  this.MAX_SIZE = 8;
  this.min = 0;
  this.counter = 0;
  this.stackControl = []; 
}

StackDataStructure.prototype.push = function(content) {
  if (!this.canPush) {
    return "Stack Overflow";
  }
  else {
    this.stackControl.push(content);
    this.counter +=1;
    return this.stackControl;
  }
}

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty) {
    return "Stack Underflow"
  }
  else {
    this.counter -= 1;
    this.stackControl.pop();
    return this.stackControl;
  }
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  }
  else{
    return false;
  } 
}

StackDataStructure.prototype.canPush = function () {
  if (this.counter == this.MAX_SIZE) {
    return false;
  }
  else {
    return true;
  }
}


// stack.addElement("Coucou");
export default StackDataStructure;
