function StackDataStructure () {
  this.stackControl= [];
  this.MAX_SIZE = 9;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  this.canPush = function(item) {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }

  }
  this.push = function (item) {
    if (this.stackControl.length === this.MAX_SIZE) {
      return 'Stack Overflow'
    } else {
      this.stackControl.push(item);
    } 
      return this.stackControl;
  }

  this.pop = function() {
    if (this.stackControl.length === 0) {
      return 'Stack Underflow';
    } else {
    return this.stackControl.pop();
  }
}

}

