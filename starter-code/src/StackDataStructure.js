function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function(){
    if (this.stackControl.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.push = function(e){
    if (this.stackControl.length < this.MAX_SIZE) {
      this.stackControl.push(e);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  };
  this.pop = function(){
    if (this.isEmpty()) {
      return 'Stack Underflow';
    } else {
      e = this.stackControl[this.stackControl.length - 1];
      this.stackControl.pop();
      return e;
    }
  };
}
