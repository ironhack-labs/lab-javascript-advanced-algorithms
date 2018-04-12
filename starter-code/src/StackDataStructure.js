function StackDataStructure (stack) {
this.stackControl = [];
this.MAX_SIZE= 9;



this.isEmpty = function (){
  return this.stackControl.length === 0;
} 

this.push = function(val){
  if (this.canPush()){
    this.stackControl.push(val);
    return this.stackControl;
  }
  return "Stack Overflow"; 

}
this.canPush = function (){
return this.stackControl.length + 1 < this.MAX_SIZE;
}
this.pop = function (val){
  if (this.stackControl.length >= 1){
    return this.stackControl.pop(val);
  } else {
    return 'Stack Underflow';
  }   

}
}





