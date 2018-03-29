function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 2;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true;
  } else {
    return false;
  }
};
StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE || this.isEmpty() == true) {
        return true;
    }
else {
    return false;
  }
}

StackDataStructure.prototype.push = function(e) {
if (this.canPush() == true) {
    this.stackControl.push(e);

    return this.stackControl;
} else {
    return "Stack Overflow";
}

}

StackDataStructure.prototype.pop = function(e) {
    if (this.isEmpty() == true) {
        return "Stack Underflow";
    } else { 
    return this.stackControl.pop(e);
    }
};