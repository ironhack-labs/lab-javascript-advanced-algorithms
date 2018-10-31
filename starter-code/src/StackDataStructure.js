class StackDataStructure {
  constructor(){
    this.stackControl = [];
    this.MAX_SIZE = 8;


  }
  
  isEmpty()  {
    return this.stackControl.length > 0 ?  false : true;
    
  }
  canPush()  {
    return this.MAX_SIZE >= 8  ? true : false
  }
  push(ele)  {
    if (this.canPush()){
      this.stackControl.push(ele);
      return this.stackControl;    
    }else{
      return 'Stack Overflow';
    }
  }
  pop(ele)  {
    if (this.isEmpty()){
      return "Stack Underflow";
    }else{
      return this.stackControl.pop(ele)
    }

  }
}




