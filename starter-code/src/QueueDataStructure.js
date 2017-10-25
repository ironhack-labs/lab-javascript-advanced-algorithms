function QueueDataStructure () {
   this.queueControl = [];
   this.MAX_SIZE = 10;
}


QueueDataStructure.prototype.isEmpty = function () {
return this.queueControl.length <= 0;
};

QueueDataStructure.prototype.canEnqueue= function () {
return this.queueControl.length < this.MAX_SIZE;
};

var e = [19, 88];

QueueDataStructure.prototype.enqueue = function (e) {
if (this.canEnqueue()) {
  this.queueControl = this.queueControl.enqueue(e);
  return this.queueControl;
} else {
return "Stack Overflow";
}
};

QueueDataStructure.prototype.dequeue = function (e) {
if (this.isEmpty()) {
return 'Queue Underflow';
} else {
return this.queueControl.dequeue(e);
}
};
