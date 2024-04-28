class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length === 0;
  }

  enqueue(item) {
    
    try{
      if(this.canEnqueue())
    {this.queueControl.unshift(item)}
    else
    {throw new Error("STACK_OVERFLOW")};
    }
    catch(error){
      console.log(error);
    }
    
    
    
  }

  dequeue() {
  
    try {
      if(!this.isEmpty())
    {this.queueControl.shift();}
    else
    {throw new Error("STACK_UNDERRFLOW");}
    } catch (error) {
      console.log(error);
    }

  }
    

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
/*

const QueueA = new Queue();

for(let i=QueueA.display().length;i<QueueA.MAX_SIZE;i++){
  QueueA.enqueue("Test");
}
console.log(QueueA.display());
console.log(QueueA.display().length);

QueueA.dequeue();
console.log(QueueA.display());
console.log(QueueA.display().length);

for(let i=QueueA.display().length;i<QueueA.MAX_SIZE;i++){
  QueueA.enqueue("Test");
}
QueueA.enqueue("Test");
console.log(QueueA.display());

for(let i=QueueA.display().length;i>0;i--){
  QueueA.dequeue();
}

QueueA.dequeue();
console.log(QueueA.display());
*/

//const newQueue = new Queue();

//console.log(newQueue.display().length);