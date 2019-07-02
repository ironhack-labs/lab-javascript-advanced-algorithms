var queue = new QueueDatasStructure;

class QueueDatasStructure{
  constructor(){
    this.queueControl = [];
    this.MAX_SIZE = 0;

  }
  isEmpty(){
    return !this.MAX_SIZE
  }
  canEnqueue(){
   if (!this.MAX_SIZE){
     return null
   }
   return this.MAX_SIZE
  }
  
}
