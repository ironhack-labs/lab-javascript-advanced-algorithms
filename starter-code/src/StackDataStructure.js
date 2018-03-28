function StackDataStructure(stack) {
  this.stackControl=[];
  this.MAX_SIZE=this.stackControl.length;

  this.isEmpty = function() {
    if (this.stackControl.length==0){
      return true;
    } else {
      return false;
    }
  };
  
  this.canPush = function(){
    if(this.stackControl){
      return true;
    } else {
      return false;
    }
  };
  
  this.push = function(e){
    this.stackControl.push(e);
    this.isEmpty();
    return [e];
  };
  this.pop = function(){
    
  };


}

