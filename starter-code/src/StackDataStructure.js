
class StackDataStructure {
  constructor(){
    this.stackControl = []
    this.MAX_SIZE = 10
  }
  isEmpty(){
    return this.stackControl.length === 0
   
  }
  canPush(){
    if(this.stackControl.length == this.MAX_SIZE){
    return false
    }
    return true
  }

  push(element){
    if(this.stackControl.length == this.MAX_SIZE){
      return "Stack Overflow"
    }
    else{
      this.stackControl.push(element)
      return this.stackControl
    }
  }

  pop(element){
    if(!this.isEmpty()){
      return this.stackControl.pop(element)
    }
    else{
      return "Stack Underflow"
    }
  }
  
}
