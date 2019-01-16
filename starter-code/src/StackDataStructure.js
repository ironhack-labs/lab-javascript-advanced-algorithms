class StackDataStructure {
  constructor(){
    this.stackControl =[];
    this.MAX_SIZE = 8;

  }
  isEmpty(){
    if(this.stackControl.length===0)return true;
    return false;
  }
  canPush(){
    if(this.stackControl.length<this.MAX_SIZE)return true;
    return false
  }
  push(element){
    if(!this.canPush())return "Stack Overflow"
    this.stackControl.push(element)
    return this.stackControl
  }
  pop(){
    if(this.isEmpty()) return "Stack Underflow"
    return this.stackControl.pop()
  }
}
