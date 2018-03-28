

function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 30;
}


StackDataStructure.prototype.isEmpty = function (){

  if (this.stackControl.length == 0) {
    return true;
  }
  return false;
}

StackDataStructure.prototype.canPush = function (){
  if (this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  else {
    return false;
  }
}

StackDataStructure.prototype.push = function (arg){
  if (this.canPush()){
    this.stackControl.push(arg);
    return this.stackControl;
    }
  if (!this.canPush()){
    return 'Stack Overflow';
  }   
}

StackDataStructure.prototype.pop = function (){
  if (this.isEmpty()) {
    return 'Stack Underflow';
  }
  else {
  return this.stackControl.pop();
  }

  
}


