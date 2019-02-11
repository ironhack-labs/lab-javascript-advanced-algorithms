function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 0;

  this.isEmpty = function(){
    return (this.stackControl.length === 0)
  }
  this.canPush = function(){
    return (this.isEmpty());
  }
  this.push = function(row){
    if (this.stackControl.length === this.MAX_SIZE && this.MAX_SIZE !=0) {
      return 'Stack Overflow';
    }
    this.stackControl.push(row);
    return this.stackControl;
  }
  this.pop = function(){
    if (this.isEmpty()){
      return "Stack Underflow";
    } else {
    return this.stackControl.pop();
    }
  }
}