function StackDataStructure () {

  this.stackControl = [];
  
  this.MAX_SIZE = 19;
  
  }
  
  StackDataStructure.prototype.isEmpty = function () {
  
    return this.stackControl == 0;
  
  }
  
  StackDataStructure.prototype.canPush = function() {
  
    return this.stackControl < this.MAX_SIZE;
  
  }
  
  StackDataStructure.prototype.push = function (element) {
  
  if (this.canPush() == false ) return 'Stack Overflow';
  
  if (element !== "") { this.stackControl.push(element); };

  return this.stackControl;

  }
  
  StackDataStructure.prototype.pop = function () {
  
  if ( this.isEmpty() == true) {
  
    var mPop = 'Stack Underflow';
  
  } else {
  
    var mPop = this.stackControl.pop();
  }
  
  return mPop;
}