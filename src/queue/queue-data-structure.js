class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() { return (this.queueControl.length < this.MAX_SIZE); }

  isEmpty() { return (this.queueControl.length === 0); }

  enqueue(item) {
    if (this.canEnqueue() === true)
      this.queueControl.push(item);
    else
      throw new Error('QUEUE_OVERFLOW');
    return(this.queueControl);
  }

  dequeue() {
    if (this.isEmpty() === false)
      return(this.queueControl.shift());
    else
      throw new Error('QUEUE_UNDERFLOW');
  }

  display() { return([... this.queueControl]); }  
}

let q = new Queue();
let arr = [1, 2, 3, 4, 5];
for (let i of arr){
  q.enqueue(i);
  console.log('q -> ', q);
}

for (let i of arr){
  q.dequeue();
  console.log('q -> ', q);
}


// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
