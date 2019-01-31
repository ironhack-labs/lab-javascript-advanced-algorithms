
class StackDataStructure {

  constructor(maxNum) {
    this.MAX_SIZE = Number(maxNum);
     this.stackControl = [];
  }

  
  isEmpty() { 
    if (this.stackControl.length == 0){
      return true;
    }
    else {
      return false;
    }
  };

  canPush(){
    if(this.stackControl.length == this.MAX_SIZE){
      return false;
    }
    else {
      return true;
    }
  }
  

  push(element){
    if (this.canPush() == true){
    this.stackControl.push(element);
    return this.stackControl;
    }
    else {
      return 'Stack Overflow';
    }
  }

  pop(){
    if(!this.isEmpty()){
    return this.stackControl.pop();
    }
    else {
      return 'Stack Underflow';
    }
  }


}
 

