function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE= 9;
  this.push = function(item) {
    if (this.canPush()==false) {
      return "Stack Overflow"};
    this.stackControl.push(item);
    return this.stackControl;
  }.bind(this);
  this.pop = function(){
    if (this.isEmpty()==true){
    return "Stack Underflow"};
    return this.stackControl.pop();
  }.bind(this);
  
  this.canPush = function() {
    if (this.stackControl.length==this.MAX_SIZE){
      return false;
    } else {return true};
  }.bind(this);
  this.isEmpty = function() {
    return this.stackControl.length == 0;
  }

}
