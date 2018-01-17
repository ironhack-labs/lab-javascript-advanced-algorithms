function StackDataStructure (stack) {
    this.stackControl = [];
    this.MAX_SIZE = 9;
}
StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length == 0;
}
StackDataStructure.prototype.canPush = function() {
    if(this.stackControl<this.MAX_SIZE) {
        return true;
    } else {
        return false;
    }
}    
StackDataStructure.prototype.push = function(a) {
        this.stackControl.push(a);
        if(this.stackControl.length>this.MAX_SIZE) {
        return "Stack Overflow";
        } 
    return this.stackControl;
}
StackDataStructure.prototype.pop = function(){
    if(this.stackControl.length > 0){
      return this.stackControl[this.stackControl.length - 1];
    } else {
      return "Stack Underflow";
    }
  }
