function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 10
}

StackDataStructure.prototype.isEmpty = function (){
  return this.stackControl.length == 0 ? true : false
}

StackDataStructure.prototype.canPush = function (){
  return (this.stackControl.length == this.MAX_SIZE) ? false : true
}

StackDataStructure.prototype.push = function (element){
  if(this.stackControl.length == this.MAX_SIZE) return 'Stack Overflow'
  else {
    this.stackControl.push(element)
    return this.stackControl
  }
}

StackDataStructure.prototype.pop = function (){
  return (this.stackControl.length == 0) ? 'Stack Underflow' : this.stackControl.pop()
}
