

class StackDataStructure {

  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 3
  }

  pop(){
    if(this.isEmpty()){
      this.stackControl.pop()
    }else{
      console.log('Undeflow');
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
        return (this.stackControl.length<1) ? true:false
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
