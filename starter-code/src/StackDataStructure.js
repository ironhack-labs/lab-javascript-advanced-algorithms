function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 9;

  this.isEmpty = function() {
    return !this.stackControl.length;
  }

  this.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
  }

  this.push = function(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      return 'Stack Overflow'
    }
  }

  this.pop = function() {
    return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop();
  }
}