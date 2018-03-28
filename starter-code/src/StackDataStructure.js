function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
   }
   
   StackDataStructure.prototype.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
   };
   
   StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
   };
   
   StackDataStructure.prototype.push = function(a) {
    if (this.canPush()) {
      this.stackControl.push(a);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
   };
   
   StackDataStructure.prototype.pop = function(a) {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else {
      return "Stack Underflow";
    }
   };
   
   function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
   }
   QueueDataStructure.prototype.isEmpty = function() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
   };
   
   QueueDataStructure.prototype.canEnqueue= function() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
   };
   
   QueueDataStructure.prototype.enqueue = function(a) {
    if (this.canEnqueue()) {
      this.queueControl.unshift(a);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
   };
   
   QueueDataStructure.prototype.dequeue = function(a) {
    if (!this.isEmpty()) {
      return this.queueControl.pop(a)
    } else {
      return "Queue Underflow";
    }
   };