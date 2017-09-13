// Queue data structure: First-In First-Out

function QueueDataStructure () {
  this.queueControl = []
  this.MAX_SIZE = 100 // arbitrary default num
}

// ==================
//    Class Methods
// ==================
QueueDataStructure.prototype.isEmpty = function () {
  return this.queueControl.length === 0
}

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length + 1 <= this.MAX_SIZE) {
    return true
  }
  return false
}

QueueDataStructure.prototype.enqueue = function (item) {
  if (this.canEnqueue()) {
    this.queueControl = [item].concat(this.queueControl)
    return this.queueControl
  }
  else {
    return 'Queue Overflow'
  }
}

QueueDataStructure.prototype.dequeue = function () {
  if (this.queueControl.length === 0) {
    return "Queue Underflow"
  }
  var length = this.queueControl.length
  var deleted_array = this.queueControl.splice(length - 1, 1)
  return deleted_array[0] //The deleted array will always have just one element in our case by design
}
