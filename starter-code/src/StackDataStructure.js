class StackDataStructure {
    constructor(){
      this.stackControl = [];
      this.MAX_SIZE = 9;

    }

    isEmpty(){
      if (this.stackControl.length == 0)
      return true;
      else return false;

    }

    canPush(){
      if (this.stackControl.length < this.MAX_SIZE)
      return true;
      else return false;

    }

    push(val){
      if (this.canPush()){
        this.stackControl.push(val); return this.stackControl;}
     else return "Stack Overflow";
    }

    pop(val){
        if (this.isEmpty()){
          return "Stack Underflow";}
          else return this.stackControl.pop(val);
       
    }

    


}

