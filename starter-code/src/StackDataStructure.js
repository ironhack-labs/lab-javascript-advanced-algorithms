function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 0;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.isEmpty = 0) { return true; } 
  else if (this.isEmpty < 1) { return true; }
  else { return false; }
};

StackDataStructure.prototype.canPush = function() {
  return true;
}

StackDataStructure.prototype.push = function(e) {
  return this.stackControl.push(e);
}

StackDataStructure.prototype.pop = function() {}