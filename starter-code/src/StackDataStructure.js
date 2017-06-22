function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 5;

  StackDataStructure.prototype.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length === this.MAX_SIZE) {

      return false;
    } else {
      return true;
    }
  };

  StackDataStructure.prototype.push = function(a) {
    if (this.canPush()) {
      this.stackControl.push(a);
      return this.stackControl;
    } else {
      console.log("Stack Overflow");
    }

  };

  StackDataStructure.prototype.pop = function() {
    if (this.isEmpty()) {
return 'Stack Underflow';
    } else {

      return this.stackControl.pop();
    }

  };
}
