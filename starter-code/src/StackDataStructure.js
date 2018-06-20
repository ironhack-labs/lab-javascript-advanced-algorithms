function StackDataStructure() {
  this.MAX_SIZE = 10;
  this.stackControl= [];
  this.isEmpty = function(){
    return this.stackControl.length == 0
  }
  this.canPush = function(){
    return this.stackControl.length <  this.MAX_SIZE
  }

  this.push = function(element){
    if(this.canPush()){
      this.stackControl.push(element)
    } else{
      return "Stack Overflow"
    }
    return this.stackControl
  }
  this.pop = function(){
    if(!this.isEmpty()){
      return this.stackControl.pop()
    } else {
      return "Stack Underflow"
    }
  }
}
