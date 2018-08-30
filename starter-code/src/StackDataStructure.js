class StackDataStructure {
  constructor(){
    this.stackControl= [],
    this.MAX_SIZE = 8
  }
  //function isEmpty
  isEmpty(){
    if(this.stackControl.length>0){
      return false
    }else{
      return true
    }
  }
    //function canPush
    canPush(){
      if(this.stackControl.length<this.MAX_SIZE){
        return true
      }else{
        return false
      }
    }
    //function push
    push(e){
      if(this.canPush()){
        this.stackControl.push(e);
        return this.stackControl;
      }else{
        return "Stack Overflow";
      }
    }
    //function pop
    pop(){
      if(this.isEmpty()){
        return "Stack Underflow"
      }
      return this.stackControl.pop()
    }
}

