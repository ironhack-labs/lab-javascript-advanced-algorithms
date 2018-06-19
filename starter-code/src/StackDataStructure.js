function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 10
  this.isEmpty = function () {
    return stackControl.length < 1
  }
}

StackDataStructure.prototype.isEmpty = function () {
  return stackControl.length < 1
}

StackDataStructure.prototype.canPush = function () {
  return isEmpty()
}

StackDataStructure.prototype.push = function (item) {
  this.stackControl.push(item)
}

StackDataStructure.prototype.pop = function () {
  this.stackControl.pop()
}
