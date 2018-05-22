StackDataStructure = function(){
  this.stackControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty = function(){
    if (this.stackControl.length == 0){
      return true
    } else {return false}
  }

  this.canPush = function(){
    if (this.stackControl.length<this.MAX_SIZE){
      return true
    } else {return false}
  }

  this.push = function(element){
    if (this.canPush()){
      this.stackControl.push(element);
      return this.stackControl;
    } else {return 'Stack Overflow'}
  } 

  this.pop = function(){
    if (!this.isEmpty()){
      return this.stackControl.pop();
    } else {return 'Stack Underflow'}
  }
}
