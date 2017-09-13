// Stack data structure: Last-In First-Out

function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 100 // arbitrary default num
}

// ==================
//    Class Methods
// ==================
StackDataStructure.prototype.isEmpty = function () {
  return this.stackControl.length === 0
}

StackDataStructure.prototype.canPush = function () {
  if (this.stackControl.length + 1 <= this.MAX_SIZE) {
    return true
  }
  return false
}

StackDataStructure.prototype.push = function (item) {
  if (this.canPush()) {
    this.stackControl.push(item)
    return this.stackControl
  }
  else {
    return "Stack Overflow"
  }
}

StackDataStructure.prototype.pop = function () {
  if (this.stackControl.length === 0) {
    return "Stack Underflow"
  }
  return this.stackControl.pop()
}
