function QueueDataStructure () {
  var number=20;
  this.queueControl=[];
  this.MAX_SIZE=number;
}

QueueDataStructure.prototype.isEmpty=function(){
  if(this.queueControl.length === 0){return true ;}else{
    console.log("that QUEUE is not empty");
    //console.log(this.queueControl.length);
    return false;}
};
QueueDataStructure.prototype.canEnqueue=function(){
  if(this.queueControl.length <this.MAX_SIZE ){return true ;}else{
    return false;}
    //console.log(this.MAX_SIZE);
};
QueueDataStructure.prototype.enqueue=function(obj){
  var number=this.MAX_SIZE;
  if(this.queueControl.length === number){
    return 'Queue Overflow';
  }else{ this.queueControl.unshift(obj);
          //console.log(this.queueControl);
          return this.queueControl;}
};
QueueDataStructure.prototype.dequeue=function(){
  if(this.isEmpty()){
    return 'Queue Underflow';
  }else{
    return this.queueControl.pop();}
    //console.log(this.queueControl);
};
var queue =new QueueDataStructure();
queue.isEmpty();
queue.canEnqueue();
queue.enqueue(19);
queue.enqueue(88);
