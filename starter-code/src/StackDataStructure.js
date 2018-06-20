function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = function(){
      if(this.stackControl.length == 0){
        return true
      } else return false
    };
    this.canPush = function(a){
      if(this.stackControl.length < this.MAX_SIZE){
        return true
      } else return false
    }
    this.push = function(x){
      if(this.stackControl.length < this.MAX_SIZE){
      this.stackControl.push(x);
      return this.stackControl;
      } else return "Stack Overflow";
    }
    this.pop = function(){
      if(this.stackControl.length == 0){
        return "Stack Underflow";
      } else return this.stackControl[this.stackControl.length - 1];
    }
  }
