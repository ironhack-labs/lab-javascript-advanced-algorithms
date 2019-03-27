class StackDataStructure  {
  stackControl = [];
  MAX_SIZE = 10;
  constructor(){

  }

  isEmpty(){
    return this.stackControl.length == 0 ? true : false;
  }

  canPush(){
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  push(a){
      if (this.canPush()) {
        this.stackControl.push(a);
        return this.stackControl;
      }else{
        return "Stack Overflow";
      }         
  }

  pop(){
    if(this.stackControl.length == 0){
      return 'Stack Underflow';
    }else{
      return this.stackControl.pop();
    }
  }
}
