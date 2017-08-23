function StackDataStructure () {
  this.stackControl = [ ]
  this.MAX_SIZE = 0
}

StackDataStructure.prototype.isEmpty = function () {
  return (this.stackControl <= 0) ? true : false
}

StackDataStructure.prototype.canPush = function () {
  return (this.MAX_SIZE <= this.stackControl) ? true : false
}

StackDataStructure.prototype.push = function (a) {
  this.stackControl.push(a)
  if (this.canPush()) { return this.stackControl  } else { return 'Stack Overflow' }
}

StackDataStructure.prototype.pop = function (a) {
  if (this.isEmpty()) { return 'Stack Underflow' } else { return this.stackControl.pop(a) }
}
