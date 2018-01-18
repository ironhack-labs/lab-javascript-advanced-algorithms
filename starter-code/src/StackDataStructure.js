function StackDataStructure () {
    this.stackControl= [];
    this.MAX_SIZE=4;
}
StackDataStructure.prototype.isEmpty = function (){
  if  (this.stackControl.length == 0 ){
  return true;
}
  else{
  return false;
  }

}
StackDataStructure.prototype.canPush= function () {
    if(this.stackControl.length < this.MAX_SIZE){
        return true;
    }
    else{
        return false;

    }
    
    
}
 StackDataStructure.prototype.push= function (value) {
    
    if (this.stackControl.length == this.MAX_SIZE){
        return "Stack Overflow"
    }else{
        this.stackControl.push(value);
    return this.stackControl;
    }
    

        
}
StackDataStructure.prototype.pop= function () {
    if (this.stackControl.length == 0){
        return "Stack Underflow";
    }else{
    return this.stackControl[this.stackControl.length -1];

}
}

