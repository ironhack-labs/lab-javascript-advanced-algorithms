function QueueDataStructure() {
  return {
    MAX_SIZE: 8,
    queueControl: [],
    isEmpty: function() {
      return this.queueControl.length === 0;
    },
    canEnqueue: function() {
      return this.queueControl.length < this.MAX_SIZE;
    },
    enqueue: function(item) {
      if (this.canEnqueue()) {
        this.queueControl.reverse();
        this.queueControl.push(item);
        this.queueControl.reverse();
        return this.queueControl;
      }
      return "Queue Overflow";
    },
    dequeue: function() {
      if (!this.isEmpty()) {
        return this.queueControl.pop();
      }
      return "Queue Underflow";
    }
  };
}
