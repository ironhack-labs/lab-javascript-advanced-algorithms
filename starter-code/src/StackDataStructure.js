function StackDataStructure () {
  this.MAX_SIZE = 10
  this.stackControl = []
  this.isEmpty = function(){
    if (this.stackControl.length > 0) {
      return false
    }
    else {return true}
  }
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
    else {return false}
  }
  this.push = function(num){
    if(this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(num)
    return this.stackControl
    }
    else {return "Stack Overflow"}
  }
  this.pop = function(){
    if (this.stackControl.length > 0) {
      var i = this.stackControl.length-1
      var last = this.stackControl[i]
      this.stackControl.pop
      return last;
    }
    else {return "Stack Underflow"}
  }
}
