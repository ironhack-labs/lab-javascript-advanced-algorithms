function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=8;
  
  //isEmpty function
  this.isEmpty=function(){
    if (this.stackControl.length===0)
    {return true}
    else {return false } 
  };
  
  //canPush function
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    }
    else {
      return false 
    }
  };
  
  //push function
  this.push=function(number){
    if (this.canPush()===false) {
      return 'Stack Overflow'
    }
    else {
      this.stackControl.push(number);
      return this.stackControl
    }
   
  };
  
  //pop function
  this.pop=function(){
    if  (this.isEmpty())
     { return ('Stack Underflow')
    }
    else {
      return this.stackControl[this.stackControl.length-1];
      this.stackControl=this.stackControl.slice(0,this.stackControl.length-1);
    }
  
  };
  
}
