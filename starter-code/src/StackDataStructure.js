

function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 6;
  
  this.isEmpty = function(){
    if (this.stackControl.length == 0) return true;
    return false;
  }
  this.canPush = function(){
    if (this.stackControl.length < MAX_SIZE) return true;
    return false;
  }
  this.push = function(arg){
    if (this.stackControl.length == this.MAX_SIZE) return "Stack Overflow";
    this.stackControl.push(arg);
    return this.stackControl
  };
  this.pop = function(){
    if (this.isEmpty()) return 'Stack Underflow';
    else {
      return this.stackControl.pop();
    }
  }
}
