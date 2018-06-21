


function StackDataStructure () {
  this.stackControles = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function() {
    if (this.stackControles == 0) {
      return true;
    } else {
      return false;
    }
  };

  this.canPush = function() {
    if (this.stackControles.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };

  this.push = function(x) {
    if (this.canPush()) {
      this.stackControles.push(x);
      return this.stackControles;
    } else {
      return "Hey man! Stack Overflow";
    }
  };

  this.pop = function() {
    if (this.stackControles.length == 0) {
      return "Stack Underflow";
    } else {
      return this.stackControles[this.stackControles.length - 1];
    }
  };

}





