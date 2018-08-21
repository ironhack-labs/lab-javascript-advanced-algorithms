class QueueDataStructure  {
    constructor(){
    this.queueControl =[];
    this.MAX_SIZE = 10;
}
isEmpty(){
    if (this.queueControl.length === 0) {
        return true;
      } else {
        return false;
      };
};

canEnqueue(){
    if (this.queueControl.length === this.MAX_SIZE) {
        return false;
      } else {
        return true;
      };
};

enqueue(e){ 
    if (this.queueControl.length >= this.MAX_SIZE) {
        return 'Queue Overflow';
      };
      this.queueControl.unshift(e);
      return this.queueControl;
};

dequeue(){
    if (this.queueControl.length === 0) {
        return 'Queue Underflow';
      }
      var vas = this.queueControl.length -1;
      return this.queueControl[vas];
    }

};
