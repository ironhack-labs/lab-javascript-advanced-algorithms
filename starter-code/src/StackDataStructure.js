function StackDataStructure(stack) {
  this.stackControl=[];
  this.MAX_SIZE= 5;

  this.isEmpty = function() {
    if (this.stackControl.length==0){
      return true;
    } else {
      return false;
    }
  };
  
  this.canPush = function(){
    if(this.stackControl.length<this.MAX_SIZE||this.isEmpty()==true){
      return true;
    } else {
      return false;
    }
  };
  
  this.push = function(e){
    
    //this.isEmpty();

    if (this.stackControl.length<this.MAX_SIZE||this.isEmpty()==true){
      this.stackControl.push(e);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  };

  this.pop = function(){

    if(this.stackControl.length>0){
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }


  };


}

