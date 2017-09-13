function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=20;

  this.isEmpty=function(){
    if(this.stackControl.length===0){
      return true;
    } else {
      return false;
    }
  };

  this.canPush=function(){
    if(this.stackControl.length===this.MAX_SIZE){
      return false;
    } else {
      return true;
    }
  };

  this.push=function(newElement){
    if (this.stackControl.length===this.MAX_SIZE){
      return 'Stack Overflow';
    }
    this.stackControl.push(newElement);
    return this.stackControl;

  };

  this.pop=function(){
    if(this.stackControl.length===0){
      return 'Stack Underflow';
    }
    var last=this.stackControl[(this.stackControl.length-1)];
    this.stackControl.pop();
    return last;
  };



}
