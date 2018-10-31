function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 10;
     

}
var stack = new StackDataStructure();

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length === 0){
    return true;
  }else{
    return false;
  }
}

StackDataStructure.prototype.canPush = function(){
  if (this.stackControl.length === this.MAX_SIZE){    
    return false;
  }else{
    return true;
  }

}
StackDataStructure.prototype.push = function(newItem){

  if (this.stackControl.length === this.MAX_SIZE){
    return 'Stack Overflow';
  }else{

    this.stackControl.push(newItem);
    return this.stackControl;
  }
       
}


StackDataStructure.prototype.pop = function(){
  
  if(this.stackControl.length === 0){
    return 'Stack Underflow';
  }else{
    
    return this.stackControl[this.stackControl.length - 1];

  }
  
}


