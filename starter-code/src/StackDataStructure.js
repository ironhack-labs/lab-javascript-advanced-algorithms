class StackDataStructure {
  constructor(){
    this.stackControl = []
    this.MAX_SIZE = 5;
  }
 
} 
  
// StackDataStructure.prototype.stackData = function() {
//     if(this.stackControl.length >= this.MAX_SIZE) {
//       return "Stack is full."
//     }
//     else {
//       this.stackControl.push()
//     }
// }

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length == 0){
    return true;
  }
  else {
    return false;
  }
} 

StackDataStructure.prototype.canPush = function(){
  console.log(this)
  if (this.stackControl.length < this.MAX_SIZE){
    return true;
  }
  else {
    //return "Stack Overflow"
    return false;
  }
}

StackDataStructure.prototype.push = function(data){
  this.stackControl.push(data);
  //return this.stackControl;
  if (this.stackControl.length <= this.MAX_SIZE){
    return this.stackControl;;
  }
  else {
    return "Stack Overflow"
  }
}

StackDataStructure.prototype.pop = function(){
  if(this.stackControl.length <= 0) {
    return "Stack Underflow"
  }
  else {
    
    return this.stackControl.pop();
  }
}