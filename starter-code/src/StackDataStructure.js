class StackDataStructure {
  constructor(){
    this.stackControl=[]
    this.MAX_SIZE=8
  }

  isEmpty(){
    if(this.stackControl.length>0){
      return false
    }
    return true
  }

  canPush(){
    if(this.stackControl.length <= this.MAX_SIZE){
      return true
    }
    return false
  }

  push(thing){
    if(this.canPush()){
      this.stackControl.push(thing)
    }else{
      return 'Stack Overflow'
    }
    return this.stackControl
  }

  pop(){
    if(this.isEmpty()){
      return "Stack Underflow"
    }
    this.stackControl.pop()
    return this.stackControl[this.stackControl.length-1]
  }

}