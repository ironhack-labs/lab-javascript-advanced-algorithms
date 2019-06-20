class StackDataStructure  {
  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  isEmpty(){
    if(this.stackControl.length > 0){
      return false;
    }else{
      return true;
    }
  }
  canPush(){
    if(this.stackControl.length < this.MAX_SIZE){
      return true;
    }else{
      return false;
    }
  }

  push(arg){
    if(this.canPush()){
    this.stackControl.push(arg);
    return this.stackControl;
  }else{
    return "Stack Overflow"
  }
  }
  pop(){
    if(!this.isEmpty()){
    let popped = this.stackControl.pop();
    return popped;
    }else{
      return 'Stack Underflow';
    }
  }

}
