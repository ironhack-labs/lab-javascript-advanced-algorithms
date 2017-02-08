
QueueDataStructure.prototype.isEmpty = function() {
  var checker = this.isArray.length;
  if (checker === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  var checker = this.isArray.length;
  if (this.MAX_SIZE <= checker) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.enqueue = function() {
  this.isArray.unshift(item);
  return this.isEmpty();
};

QueueDataStructure.prototype.dequeue = function() {
  this.isArray.shift();
  return isArray[0];
};


function QueueDataStructure () {
  this.isArray = [];
  this.MAX_SIZE = 5;

}

var queue;
queue = new QueueDataStructure();
