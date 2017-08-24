function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

}

StackDataStructure.prototype.isEmpty= function(){
    if(this.stackControl.length == 0){

     return true;
   }else{
     return false;
   }
};

StackDataStructure.prototype.canPush= function(){
    if(this.MAX_SIZE==this.stackControl.length){
      return false;
    }else{
      return true;
    }
};

StackDataStructure.prototype.push= function(value){
    if(this.MAX_SIZE==this.stackControl.length){
      return "Stack Overflow";
    }else{
    this.stackControl.push(value);
  }
    return this.stackControl;


};

StackDataStructure.prototype.pop= function(value){
  if(this.stackControl.length==0){
    return "Stack Underflow";
  }
    return this.stackControl.pop(value);


};
