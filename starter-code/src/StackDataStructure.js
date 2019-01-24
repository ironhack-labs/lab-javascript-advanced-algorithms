function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 9; // falta definir max size

  this.isEmpty = function() {
    if (this.stackControl.length == 0) return true;
    return false;
  };

  this.canPush = function() {
    if (this.MAX_SIZE > 1) return true;
    console.log(this.MAX_SIZE);
    return false;
  };

  this.push = function(elem) {
    if (this.canPush()) {
      this.stackControl.push(elem);
      return [elem];
    } else {
      return "Stack Overflow";
    }
  };

  this.pop = function() {
    if (!this.isEmpty()) {
      let last = this.stackControl.pop();
      return last;
    } else {
      return "Stack Underflow";
    }
  };
}
