
class QueueDataStructure {
 constructor(){
   this.queueControl = [];
   this.MAX_SIZE = 10;
 }
 isEmpty() {
   if(this.queueControl.length!==0) {
     return false;
   } else {
     return true;
   }
 }

 canEnqueue() {
   if(this.queueControl.length < this.MAX_SIZE){
     return true;
   } else {
     return false;
   }
 }
 // push(item)
 enqueue(element){
   if(this.queueControl.length < this.MAX_SIZE){
     this.queueControl.unshift(element);
     return this.queueControl;
   } else {
     return 'Queue Overflow';
//       this.queueControl.shift;
//       this.queueControl.push(element);
     }
}
// pop()
 dequeue(){
   if (this.queueControl.length !== 0) {
     return this.queueControl.pop();
   } else {
     return 'Queue Underflow';
   }
 }
}
