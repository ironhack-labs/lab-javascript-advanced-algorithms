function StackDataStructure () {

  this.stackControl = [];

  this.MAX_SIZE = 1;

  this.isEmpty = function(){
    if (this.stackControl.length ===0){
      return true;
    } else {
      return false;
    }
  };

  this.canPush = function(){
    if(this.stackControl.length>=this.MAX_SIZE){
      return false;
    }
    return true;
  };

  this.push = function(x){
    this.stackControl.push(x);
      if(this.stackControl.length>this.MAX_SIZE){
      return "Stack Overflow";
    }
    return this.stackControl;
  };

  this.pop = function(){
    if(this.stackControl.length===0){
      return "Stack Underflow";
    }
    return this.stackControl.pop();
  };




}
