

class StackDataStructure {

  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 3
  }

  pop(){
    if(this.isEmpty()){
      return 'Stack Underflow'
    }else{
      this.stackControl.pop()
    }
  }

  push(args){
    if(this.canPush()){
      this.stackControl.push(args)
      return this.stackControl

    }else{
      return 'Stack Overflow'
    }
  }

  isEmpty(){
         if(this.stackControl.length<1){
         return true
       }else{
         return false
       }
  }
  canPush(){
    if (this.stackControl.length >= this.MAX_SIZE){
      return false
    }else{
      return true
    }
  }
  describe(){

  }

}


let arr = new StackDataStructure
arr.push(3)
arr.push(5)
console.log(arr.stackControl.pop());
