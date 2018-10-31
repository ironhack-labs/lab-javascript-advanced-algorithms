function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 8;     
}


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
// debugger
  if (this.stackControl.length === this.MAX_SIZE){
    return 'Stack Overflow';
  }else{

    this.stackControl.push(newItem);
    return this.stackControl;
  }
       
}

StackDataStructure.prototype.pop = function(){
  // debugger
  if(this.stackControl.length === 0){
    return 'Stack Underflow';
  }else{
    // this.stackControl.pop();
    return this.stackControl.pop();

  }
  
}


