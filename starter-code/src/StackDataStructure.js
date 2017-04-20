function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 10
}

StackDataStructure.prototype.isEmpty = function() {
  var result = true
  if(this.stackControl.length != 0) {
    result = false
  }

  return result
}

StackDataStructure.prototype.canPush = function() {
  var result = true
  if(this.stackControl.length == this.MAX_SIZE) {
    result = false
  }

  return result
}

StackDataStructure.prototype.push = function(element) {
  var result = this.stackControl
  if(this.stackControl.length != this.MAX_SIZE) {
    this.stackControl.push(element)
  } else {
    result = 'Stack Overflow'
  }


  return result
}

StackDataStructure.prototype.pop = function(element) {
  var result = this.stackControl.pop(element)
  if(this.stackControl.length == 0) {
    result = 'Stack Underflow'
  }
  return result
}
