function QueueDataStructure () {
   this.queueControl = [];
   this.MAX_SIZE = 1;
}

QueueDataStructure.prototype.isEmpty = function () {
return this.queueControl.length <= 0;
};

QueueDataStructure.prototype.canEnqueue= function () {
if (this.queueControl.length < this.MAX_SIZE){

} else {
  return false;
}
return this.queueControl.length < this.MAX_SIZE;
};

var e = [19];

QueueDataStructure.prototype.enqueue = function (e) {
if (this.canEnqueue()) {
this.queueControl = this.queueControl.enqueue;
return false;
} else {
return ("Stack Overflow");
}
};
// //
QueueDataStructure.prototype.dequeue = function (e) {
if (this.isEmpty()) {
return 'Queue Underflow';
} else {
//return this.queueControl.dequeue [];
}
};
