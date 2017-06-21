function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 0;
  this.isEmpty = function() {
    if (this.stackControl === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.canPush = function() {
    if (isEmpty) {
      return true;
    } else {
      return false;
    }
  };
  this.push = function() {
    if (this.stackControl === 0) {
      return this.stackControl.push();
    } else {
      return "Stack Underflow";
    }
  };
  this.pop = function() {
    if (this.stackControl !== 0) {
      return this.stackControl.pop();
    } else {
      return false;
    }
  };
  this.isEmpty = function() {
    if(this.stackControl[0]=== undefined){
      return true;
    }else{
      return false;
  }
};
}
