function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}
StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
    
  } else {

    return false;
    
    
  }
}
StackDataStructure.prototype.canPush = function() {
    if( this.stackControl.length < this.MAX_SIZE ){
        return true;
    }else{

        return false;
    }
}
StackDataStructure.prototype.push = function(newElement) {
    if(this.stackControl.length === this.MAX_SIZE)
     return ('Stack Overflow');
    
    this.stackControl.push(newElement);
    return this.stackControl;
}

StackDataStructure.prototype.pop = function() {
    if(this.stackControl.length === 0)
    return ('Stack Underflow');
    
    return this.stackControl.pop();
  
}
