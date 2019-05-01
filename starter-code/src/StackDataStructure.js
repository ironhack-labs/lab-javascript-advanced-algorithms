class StackDataStructure {
  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }
  push(newElement){
    if(this.canPush()){
      this.stackControl.push(newElement)
      return this.stackControl
    }
    else{
      return 'Stack Overflow'
    }
  }
  pop() {
    if(!this.isEmpty()){
      return this.stackControl.pop()
    }
    else {
      return 'Stack Underflow'
    }
  }
  canPush(){
    if(this.stackControl.length !== this.MAX_SIZE){
      return true
    }
    else {
      return false
    }
  }
  isEmpty(){
    if(this.stackControl.length === 0){
      return true
    }
    else {
      return false
    }
  }
}

