class StackDataStructure{


  constructor(maxNumElements){
    this.MAX_SIZE = Number(maxNumElements);
    this.stackControl = [];

  }

  isEmpty(){
    return (this.stackControl.length == 0);
  }

  canPush(){
    return !(this.stackControl.length == this.MAX_SIZE);
  }

  push(element){
    if(this.canPush()){
      this.stackControl.push(element);
      return this.stackControl;
    }
    return `Stack Overflow`;
  }

  pop(){
    if(!this.isEmpty()){
      return this.stackControl.pop();
    }
      return `Stack Underflow`;
  }

}
