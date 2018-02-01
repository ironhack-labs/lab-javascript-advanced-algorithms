function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function(){
    return(this.stackControl.lenght === 0);
  };
  this.canPush = function(){
    return(this.stackControl.lenght < 8); 
  };
  this.push = function(element){
    if (this.canPush()){
    this.stackControl.push(element);
     return this.stackControl;
    } else {
    return "Stack Overflow"
 }
}
this.pop = function(element){
  if (this.isEmpty()){
    return "Stack Underflow";
  }else {
    return this.stackControl.pop(element);
  }
};
    };
  
