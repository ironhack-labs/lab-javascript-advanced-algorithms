function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;

}

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length > 0){
    return false;
  } else{
    return true;
  }
};

StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length == this.MAX_SIZE){
    return false;
  } else{
    return true;
  }
};

StackDataStructure.prototype.push = function(arg){
  if(this.stackControl.length == this.MAX_SIZE){
    return 'Stack Overflow';
  } else{
    this.stackControl.push(arg);
    return this.stackControl;
  }
};

StackDataStructure.prototype.pop = function(){
  var noElement = this.stackControl.length;
  if(noElement == 0){
    return 'Stack Underflow';
  } else{
    var lastElement = this.stackControl.length -1;
    return this.stackControl.pop(lastElement);
  }
};
