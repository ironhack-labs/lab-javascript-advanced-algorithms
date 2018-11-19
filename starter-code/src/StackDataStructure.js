function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;

  this.isEmpty =  function(){
    if(this.stackControl.length === 0){
      return true
    } else {
    return false
    }
  }

  this.canPush = function(){
    if(this.stackControl.length === this.MAX_SIZE){
     return false
    } else {
     return true
    }
  }

  this.push =  function(unit){
    if (this.canPush()) {
      this.stackControl.push(unit);
      return this.stackControl;
    }
      else { return "Stack Overflow";
    }

  }
  this.pop = function(){
    if(this.stackControl.length === 0){
      return 'Stack Underflow';
    } else {
      return this.stackControl.pop()
    }
  }

}
