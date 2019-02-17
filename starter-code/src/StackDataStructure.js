function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 4;
  this.isEmpty = function(){
  if(this.stackControl.length != 0){
    return false;
  }
  return true;
  };
  this.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE ){
      return true;
    }
    return false;
  };
  this.push = function(elem){
    if(this.canPush()) {
      this.stackControl.push(elem);
      return this.stackControl
    }
    else {return 'Stack Overflow';}
    
  }
  this.pop = function(){
    if(this.isEmpty() == false){
      return this.stackControl.pop()
    }
    return 'Stack Underflow'
  }

   
}